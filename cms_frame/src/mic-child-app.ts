import { ROUTE } from '@/config'

export default [
  {
    name: 'vue child app 1', // app name registered
    // entry: '//localhost:9002',
    entry: '//qk.packaged.subapp.dba.ink',
    container: '#sub-1',
    activeRule: '/app-vue'
  },
  {
    name: 'vue child app 2',
    entry: '//localhost:9002',
    container: '#sub-1',
    activeRule: `${ROUTE.SUB_PREFIX}/dev2`,
    props: {
      baseRouter: '/subapp/dev2'
    }
  }
]
