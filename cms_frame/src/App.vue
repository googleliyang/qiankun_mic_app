<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import actions from '@/shared/action'
import { Component, Vue } from 'vue-property-decorator'

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
  }

  updateState ():void {
    actions.setGlobalState({ Authorization: Math.random() })
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
