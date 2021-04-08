import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AuthLayout from '@/layouts/user/authLayout.vue'
import MainLayout from '@/layouts/main/indexLayout.vue'
import { ROUTE } from '@/config'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    redirect: '/subapp/',
    meta: { title: '管理系统' },
    children: [
      {
        path: '*',
        name: 'user',
        component: () => import('@/views/auth/Login.vue'),
        meta: {
          title: '登录',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/subapp',
    name: 'MainLayout',
    component: MainLayout,
    redirect: '/',
    meta: { title: '管理系统' },
    children: [
      {
        // match all sub app
        path: '*',
        name: 'sub',
        component: () => import('@/common/components/subApp/index.vue'),
        meta: {
          title: 'sub',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  },
  {
    path: '/debug',
    name: 'Debug',
    component: () => import(/* webpackChunkName: "about" */ '../views/Debug.vue')
  },
  {
    path: '/frame_about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
