/*
 * @Author: your name
 * @Date: 2020-12-21 17:12:04
 * @LastEditTime: 2020-12-22 17:29:38
 * @LastEditors: Please set LastEditors
 * @Description: 终端自定义打印信息
 * @FilePath: /ts-react-hooks-webpack/build/custom-plugins.js
 */
const clearConsole = require('react-dev-utils/clearConsole')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

const compilerHooks = [
  {
    apply: compiler => {
      compiler.hooks.invalid.tap('invalid', function () {
        console.log('Compiling...')
      })
      compiler.hooks.done.tap('done', function (stats) {
        const rawMessages = stats.toJson({}, true)
        // console.log('rawMessages:',rawMessages)
        try{
          const messages = formatWebpackMessages(rawMessages)
          if (!messages.errors.length && !messages.warnings.length) {
            clearConsole()
          }
          if (messages.errors.length) {
            console.log('Failed to compile.')
            messages.errors.forEach(e => console.log(e))
            return
          }
          if (messages.warnings.length) {
            console.log('Compiled with warnings.')
            messages.warnings.forEach(w => console.log(w))
          }
        } catch(err) {
          console.log(err)
        }
      })
    }
  }
]

module.exports = { compilerHooks }