const {
  resolve
} = require('./utils')

/*项目入口*/
module.exports = {
  // 打包名开头设置为index
  index: [resolve('src/modules/Index/index.tsx')],
  // 如果有第二个页面则配置第二个入口
  app: [resolve('src/modules/App/index.tsx')],
}