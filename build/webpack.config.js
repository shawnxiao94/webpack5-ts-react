/*
 * @Author: your name
 * @Date: 2020-12-10 10:36:36
 * @LastEditTime: 2020-12-22 17:55:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/webpack.config.js
 */
// const openBrowser = require('react-dev-utils/openBrowser')

const config = require('./config')
const constants = require('./constants')
const styleRules = require('./rules/styleRules')
const jsRules = require('./rules/jsRules')
const fileRules = require('./rules/fileRules')
const plugins = require('./plugins')
const optimization = require('./optimization')
const { assetsPath, resolve } = require('./utils')

const devServer = {
  contentBase: "../dist",
  host: 'localhost',
  port: 3000,
  // 非hash路由模式时解决刷新页面404问题，=> 重定向index.html页面
  historyApiFallback: true,
  open: true,
  overlay: {
    //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
    errors: true
  },
  inline: true,
  hot: true, //热更新，修改代码后，不刷新整个页面
  progress: true, // 编译的进度条
  compress: true, // 自动压缩
  proxy: {
    "/project": {
      target: "http://127.0.0.1:8888",
      pathRewrite: { "^/project": "/" }, // 开头的 /project 路径，会被替换为http://127.0.0.1:8888/路径
      ws: true,
      changeOrigin: true // 突破网站对爬虫的限制, 一般都要开启
    },
    "/api": {
      target: "http://localhost:5000", // 代理 mock 服务的请求, 相当于是 /api 开头的全部匹配到 http://localhost:5000/api
      pathRewrite: { "^/api": "/" },
      ws: true,
      changeOrigin: true
    }
  },
}

const conf = {
  // 环境
  mode: constants.APP_ENV === 'dev' ? 'development' : 'production',
  /*项目入口*/
  entry: {
    // 打包名开头设置为app
    app: [resolve('src/index.tsx')],
  },
  /*输出目录*/
  output: {
    path: config.assetsRoot,
    filename: 'js/[name].[contenthash].js',
    chunkFilename:
      constants.APP_ENV === 'dev'
        ? '[name].js'
        : assetsPath('js/[name].[id].[contenthash].js'),
    publicPath: config.assetsPublicPath,
    pathinfo: false,
  },
  devServer: constants.APP_ENV === 'dev' ? devServer : {},
  module: {
    rules: [...styleRules, ...jsRules, ...fileRules],
  },
  resolve: {
    //后缀名自动补全
    extensions: constants.FILE_EXTENSIONS,
    // 别名
    alias: {
      '@/*': ['src/*'],
      '@': resolve('src'),
      '@components': resolve('src/components'),
    },
  },
  plugins: [...plugins],
  optimization,
  stats: 'minimal',
  target: 'web',
  devtool: config.sourceMap,
}

// if (process.env.NODE_ENV === 'development') {
//   conf.devServer = {
//     // 不显示模块信息
//     stats: 'errors-warnings',
//     port: config.devPort,
//     hot: true,
//     disableHostCheck: true,
//     host: '0.0.0.0',
//     after: function () {
//       openBrowser(`http://localhost:${config.devPort}`)
//     }
//   }
// }

module.exports = conf