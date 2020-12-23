/*
 * @Author: your name
 * @Date: 2020-12-10 10:55:05
 * @LastEditTime: 2020-12-21 16:17:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/utils.js
 */
const path = require('path')

const config = require('./config')

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}

exports.resolve = function (dir) {
  return path.join(__dirname, './../', dir)
}
