import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import action from './shared/action'
import preset from './bootstrap'
import './public-path'

Vue.config.productionTip = false

preset.init()

console.log(window.__POWERED_BY_QIANKUN__ ? 'run in qiankun' : 'run solo')

let instance: Vue | null
let router = null
function render (props: any = {}) {
  const { container, baseRouter } = props
  if (props) {
    action.setActions(props)
  }
  router = new VueRouter({
    routes,
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? baseRouter : '/'
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// running in vue
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/* eslint-disable */ 
export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props: any) {
  console.log(`%c [vue] props from main framework`, 'background: orange; color: #fff', props)
  render(props)
}
export async function unmount () {
  if (instance) {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
  router = null
}
/* eslint-enable */
