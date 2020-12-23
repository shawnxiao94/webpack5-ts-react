/*
 * @Author: your name
 * @Date: 2020-12-10 10:54:51
 * @LastEditTime: 2020-12-22 14:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/build/constants.js
 */
const argv = require('yargs-parser')(process.argv.slice(4))
const APP_ENV = argv.env || 'dev'

const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx','.json','.styl','.scss', '.less', '.css']

module.exports = {
  APP_ENV,
  FILE_EXTENSIONS,
}
