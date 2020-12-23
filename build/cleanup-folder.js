/*
 * @Author: your name
 * @Date: 2020-12-22 11:24:55
 * @LastEditTime: 2020-12-22 11:25:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/cleanup-folder.js
 */
const fs = require('fs-extra')
const path = require('path')

const constants = require('./constants')
if (constants.APP_ENV !== 'dev') {
    fs.emptyDirSync(path.join(__dirname, `../dist/${constants.APP_ENV}`))
}