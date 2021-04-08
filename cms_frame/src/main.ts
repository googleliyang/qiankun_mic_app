import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import microApps from './mic-child-app'
import { Icon } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Icon)

registerMicroApps(microApps, {
  beforeLoad: async app => await console.log(`%c Before load', ${app.name}`, 'background: green; color: #fff'),
  afterUnmount: async app => await console.log(`%c After unmount', ${app.name}`, 'background: red; color: #fff')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

start()
