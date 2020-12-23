/*
 * @Author: your name
 * @Date: 2020-11-04 16:41:29
 * @LastEditTime: 2020-11-05 14:08:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/react-app-env.d.ts
 */
// <reference types="react-scripts" />

// typescript  下引用[fileName].module.less  提示引用不到资源
// 原因：未在全局暴露less 接口
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
