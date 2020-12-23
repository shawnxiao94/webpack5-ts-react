/*
 * @Author: your name
 * @Date: 2020-12-21 11:56:16
 * @LastEditTime: 2020-12-21 16:23:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/babel.config.js
 */
/** @format */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['chrome >= 47'] },
        useBuiltIns: 'usage', // babel按需加载 polyfill
        modules: false, // 生成ES6模块代码
        corejs: 3 // 2-corejs@2  3-corejs@3
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    // ['@babel/plugin-transform-runtime', { corejs: 3, useESModules: true, helpers: true }],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // `style: true` 会加载 less 文件
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import'
  ],
  // 开启babel缓存
  // 第二次构建时，会读取之前的缓存
  // cacheDirectory: true
}
