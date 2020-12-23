const webpack = require('webpack')
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// 静态资源输出插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，
// 支持按需加载css和sourceMap异步加载,不重复编译，性能好
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const {
  TypedCssModulesPlugin
} = require('typed-css-modules-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const {
  compilerHooks
} = require('./custom-plugins')
const constants = require('./constants')
const config = require('./config')
const {
  resolve,
  assetsPath
} = require('./utils')
const env = require('./env.json')
const entry = require('./entry')

const oriEnv = env[constants.APP_ENV]
Object.assign(oriEnv, {
  APP_ENV: constants.APP_ENV
})
// webpack process.env
const defineEnv = {}
for (let key in oriEnv) {
  defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key])
}
const basePlugins = [
  // new MomentLocalesPlugin({
  //   localesToKeep: ['es-us', 'zh-cn'],
  // }),
  // 注入全局变量
  new webpack.DefinePlugin(defineEnv),
  // 用于为TypeScript+CSS模块项目生成TypeScript类型声明。该插件在编译阶段之前生成与相应的.css文件位于同一位置的.css.d.ts文件，以便在TypeScript源代码中检查所有css导入。
  new TypedCssModulesPlugin({
    globPattern: 'src/assets/!(styles)/**/*.less'
  }),
  // 多进程方案：对ts进行类型检查fork一个进程进行检查，并设置async为false，将错误信息反馈给webpack
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: resolve('tsconfig.json')
    },
    // eslint: { enabled: true, files: resolve('../src/**/*.{ts,tsx}') },
    // 将async设置为false后，就要求webpack等待fork-ts-checker-webpack-plugin进程返回信息。不过这样做也可能会拖慢整个webpack的转译等待时间。这就要看怎么选择了
    async: false,
  }),
]

const devPlugins = [
  // 支持模块热更新
  new webpack.HotModuleReplacementPlugin(),
  // 此Webpack插件强制所有必需模块的完整路径与磁盘上实际路径的确切大小写相匹配
  // new CaseSensitivePathsPlugin(),
  // 终端命令窗口自定义打印信息
  ...compilerHooks
]

const prodPlugins = [
  new CleanWebpackPlugin(),
  // 静态资源输出
  new CopyWebpackPlugin({
    patterns: [{
      // 打包的静态资源目录地址
      from: resolve('/src/static'),
      // 打包到dist下面的static
      to: './static',
    }],
    options: {}
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: assetsPath('css/[name].[contenthash].css'),
    chunkFilename: assetsPath('css/[name].[id].[contenthash].css'),
    ignoreOrder: true
  }),
  // 可以直接生成 service-worker 文件
  new WorkboxPlugin.GenerateSW({
    cacheId: 'ts-react-webpack', // 设置前缀
    clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
    skipWaiting: true, // 强制等待中的 Service Worker 被激活
    offlineGoogleAnalytics: false,
    inlineWorkboxRuntime: true,
    // precache ignore
    exclude: [/index\.html$/, /\.map$/],
    // swDest: 'service-wroker.js', // 输出 Service worker 文件
    // globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
    // globIgnores: ['service-wroker.js'], // 忽略的文件
    // dynamic update
    runtimeCaching: [
      // 配置路由请求缓存
      {
        // match html
        urlPattern: config.pagePattern, // 匹配文件
        handler: 'NetworkFirst' // 网络优先
      },
      {
        // match static resource
        urlPattern: config.assetsPattern,
        handler: 'StaleWhileRevalidate'
      }
    ]
  })
]
// 多入口
Object.keys(entry).forEach(item => {
  basePlugins.push(
    new HtmlWebpackPlugin({
      filename: `${item}.html`,
      template: 'public/index.html',
      // 是否将js放在body的末尾
      inject: true,
      chunks: ['runtime', 'vendors', item],
      // 对html文件进行压缩
      minify: {
        // 移除HTML中的注释
        removeComments: true,
        // 折叠空白区域 也就是压缩代码
        collapseWhitespace: true,
        // 移除属性的引号
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    })
  )
});
// 读取mainifest文件中的映射文件动态链接
try {
  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
  files && files.length && files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      basePlugins.push(new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file),
      }));
    }
    if (/.*\.manifest.json/.test(file)) {
      basePlugins.push(new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file),
      }));
    }
  });
} catch (err) {
  console.log(err)
}

if (config.bundleAnalyzerReport) {
  const {
    BundleAnalyzerPlugin
  } = require('webpack-bundle-analyzer')
  prodPlugins.push(new BundleAnalyzerPlugin())
}

module.exports = basePlugins.concat(constants.APP_ENV === 'dev' ? devPlugins : prodPlugins)