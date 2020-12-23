/*
 * @Author: your name
 * @Date: 2020-12-23 16:02:37
 * @LastEditTime: 2020-12-23 16:23:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack5-ts-react/dll.config.js
 */
const path = require("path");
module.exports = {
  vendor: [
    // "axios",
    // "mockjs",
    // "nprogress",
    "core-js",
    // "throttle-debounce",
    // "html2canvas",
    // "vue",
    // "ant-design-vue"
  ],
  dllDir: path.resolve(__dirname, "dll"),
  basePath: __dirname
};