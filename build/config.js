/*
 * @Author: your name
 * @Date: 2020-12-10 10:54:34
 * @LastEditTime: 2020-12-23 11:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/config.js
 */
const path = require('path')

const {
  APP_ENV
} = require('./constants')

const DOMAIN = 'https://baidu.yp.com'

// static resource domain（CDN）
const STATICDOMAIN = APP_ENV === 'prod' ? '.' : ''

module.exports = {
  // open http://localhost:devPort/
  devPort: 8080,
  // output html
  index: path.resolve(__dirname, `../dist/index.html`),
  assetsRoot: path.resolve(__dirname, `../dist`),
  assetsPublicPath: APP_ENV === 'dev' ? '/' : `${STATICDOMAIN}/`,
  assetsSubDirectory: './',
  // page Pattern for workbox
  pagePattern: new RegExp(DOMAIN),
  // id you use CDN, change it!!!
  assetsPattern: new RegExp(`${DOMAIN.replace(/\//g, '\\/')}\\/static`),
  // production sourceMap for monitoring
  // 注意webpack4和5的区别
  sourceMap: APP_ENV === 'dev' ?
    'eval-source-map' : APP_ENV === 'prod' ?
    'source-map' : false,
  // 是否抽离css，把css样式从js文件中提取到单独的css文件中
  extractCss: APP_ENV !== 'dev',
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report,
}