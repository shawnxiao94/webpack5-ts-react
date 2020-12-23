/*
 * @Author: your name
 * @Date: 2020-12-10 10:55:28
 * @LastEditTime: 2020-12-21 16:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/rules/styleRules.js
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('../config')
const { resolve } = require('../utils')
const theme = require('../theme')
const { cacheLoader } = require('./loaders')

const cssLoader = (modules) => ({
  loader: 'css-loader',
  options: {
    modules: modules
      ? {
          mode: 'local',
          localIdentName: '[local]--[contenthash:base64:8]',
        }
      : false,
  },
})

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      // 此配置后页面直接引入scss无需路径
      includePaths: [require('bourbon').includePaths, resolve('src/assets/styles')],
    },
    // 或者这样配置
    // includePaths: [resolve('src/assets/styles')]
  },
}

const lessLoader = {
  loader: 'less-loader',
  options: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme,
    },
  },
}

const baseLoaders = (modules) => [
  config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
  cacheLoader,
  cssLoader(modules),
  'postcss-loader',
]

module.exports = [
  {
    test: /\.css$/,
    include: [resolve('node_modules')],
    use: baseLoaders(false),
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    use: [...baseLoaders(true), sassLoader],
  },
  {
    // for ant design
    test: /\.less$/,
    // less do not use threadLoader
    // https://github.com/webpack-contrib/thread-loader/issues/10
    use: [...baseLoaders(false), lessLoader],
  },
]
