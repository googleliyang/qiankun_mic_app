<template>
  <a-locale-provider :locale="zhCN">
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Demo</router-link>
    </div>
    <router-view />
  </div>
  </a-locale-provider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import action from '@/shared/action'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

@Component
export default class extends Vue {
  data ():{[key: string]: any} {
    return {
      zhCN
    }
  }

  mounted ():void {
    action.onGlobalStateChange((state: Record<string, any>) => {
      const { Authorization } = state
      console.log('From action token is ', Authorization)
      if (!Authorization) {
        // this.$message.error("未检测到登录信息！");
        // return this.$router.push('/')
      }
    }, true)
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
