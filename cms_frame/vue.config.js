/* eslint-disable */ 
const path = require('path')
/* eslint-enable */

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    port: 8080,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://www.tngou.net/openapi/v1/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}
