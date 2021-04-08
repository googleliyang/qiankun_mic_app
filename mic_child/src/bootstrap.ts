import Vue from 'vue'
import { DatePicker, LocaleProvider } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

class Bootstrap {
  public init () {
    Vue.use(DatePicker).use(LocaleProvider).use(ElementUI)
  }

    private static instance ?:Bootstrap
    public static getInstance ():Bootstrap {
      if (!this.instance) {
        this.instance = new Bootstrap()
      }
      return this.instance
    }
}

export default Bootstrap.getInstance()
