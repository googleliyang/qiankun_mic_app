<template>
  <div id="app">
    <div id="nav">
      <h1>Main</h1>
      <h2 v-if="authorization" style="color: green">
        Authorization: {{ authorization }}
      </h2>
      <router-link to="/subapp/dev2">dev-serve sub-app 1</router-link> |
      <router-link to="/app-vue/">packaged sub-app 2</router-link>
      <div style="margin-top: 20px">
        <input type="text" v-model="appUrl" placeholder="mic app url" />
        <button style="margin-left: 20px" @click="loadSubApp">
          dynamic load sub-app
        </button>
        <button style="margin-left: 20px" @click="updateState">update state</button>
      </div>
    </div>
    <div id="sub-1"></div>
  </div>
</template>

<script lang="ts">
import actions from '@/shared/action'
import { Component, Vue } from 'vue-property-decorator'
import { loadMicroApp } from 'qiankun'
import Api from '@/common/http/index'

@Component
export default class extends Vue {
  private appUrl = '//localhost:9002';
  private authorization = null

  mounted ():void{
    actions.onGlobalStateChange((state, prevState) => {
      console.log('Before updated Authorization val: ', prevState.Authorization)
      console.log('Main-app get updated Authorization:', state.Authorization)
      this.authorization = state.Authorization
      if (!this.authorization) {
        const redirectUrl = window.location.pathname
        this.$router.push('/')
        alert('登录过期, 请重新登录, 一秒后重新跳转' + redirectUrl)
        setTimeout(() => {
          this.$router.push(`/${redirectUrl}`)
        }, 1000)
      }
    })
    this.testHttp()
  }

  testHttp ():void {
    Api.get('mohurd/apt').then(res => {
      console.warn(res)
    })
  }

  updateState ():void {
    actions.setGlobalState({ Authorization: Math.random() })
  }

  private loadSubApp ():void {
    if (!this.appUrl) {
      alert('input should not be null')
    }
    loadMicroApp(
      { name: 'app1', entry: this.appUrl, container: '#sub-1', props: { brand: 'qiankun' } }
    )
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
