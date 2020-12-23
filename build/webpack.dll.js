/*
 * @desc 静态公共资源打包配置
 * 项目中引入了很多第三方库，这些库在很长的一段时间内，基本不会更新，打包的时候分开打包来提升打包速度，
 * 而DllPlugin动态链接库插件，其原理就是把网页依赖的基础模块抽离出来打包到dll文件中，
 * 当需要导入的模块存在于某个dll中时，这个模块不再被打包，而是去dll中获取。
 */
/**
 * 终端运行时环境
 */
const cwd = process.cwd()
const path = require('path');
const webpack = require('webpack');

/**
 * 项目配置文件
 */
const project = require(`${cwd}/dll.config`)

/**
 * dll第三方插件配置项
 */
const VENDOR = project.vendor
/**
 * 返回项目根目录
 */
const BASE_PATH = project.basePath

/**
 * dll文件存放目录
 */
const DLL_DIR = project.dllDir

module.exports = {
  mode: 'production',
  entry: {
    // 可以从vendors数组里提前出来单独打包
    // 配置完后打包第一次后，下次就不需要再打包这些第三方模块
    vendor: VENDOR
  },
  output: {
    filename: '[name].dll.[hash:5].js',
    path: DLL_DIR,
    // path: path.resolve(__dirname, '../dll'),
    // 用个全局变量把这些库暴露出去, 此处的全局变量名字就叫vendors
    library: '[name]_library',
    // libraryTarget: 'this'
  },
  // 关闭控制台提示
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DllPlugin({
      // 对vendors这个库进行分析
      // 定义打包的公共vendor文件对外暴露的函数名
      name: '[name]_library',
      // 把库的映射关系结果放这个文件里
      // path: path.resolve(__dirname, '../dll/[name].manifest.json'),
      path: path.resolve(DLL_DIR, 'manifest.json'),
      context: BASE_PATH
    }),
  ],
};