/* eslint-disable */ 
const { name } = require('./package')
/* eslint-enable */

module.exports = {
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
