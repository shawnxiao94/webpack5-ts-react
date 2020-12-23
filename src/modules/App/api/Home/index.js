/*
 * @Author: your name
 * @Date: 2020-11-05 15:59:43
 * @LastEditTime: 2020-12-09 16:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/Home/index.js
 */
import request from '@/utils/request'
import { jsonp } from '@/utils'
import * as model from './model.js'
// 获取登录状态
export function getLoginStatus() {
  return jsonp({
    url: `http://www.ssme.sh.gov.cn/check_log.jsp`,
  })
}
// 根据jwt获取用户信息
export function getUserInfoByJwt(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/login/getUserInfoByJwt`,
    // url: `${process.env.REACT_APP_ENV_API}/login/getUserInfoByJwt?token=${params.token}`,
    method: 'post',
    model: model.getUserInfoByJwt,
    params,
    ContentType: 'application/x-www-form-urlencoded',
    isPassTips: true, // 拦截器里不对错误进行拦截提示
  })
}
// 获取banner
export function reqBanner(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/introduction`,
    method: 'get',
    model: null,
    params: params,
  })
}
// 获取政策中心长三角数据
export function reqDataCenter(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/policyDataCenter`,
    method: 'get',
    model: null,
    params: params,
  })
}
// 获取表格数据
export function reqTableList(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/menus`,
    method: 'post',
    model: model.reqTableList,
    params: params,
  })
}
// 获取最新政策数据
export function reqPolicyList(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/latestPolicysByPageInfo`,
    method: 'get',
    model: null,
    params: params,
  })
}

export function submitFastMatching(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/policy/fastMatching`,
    method: 'get',
    model: null,
    params,
  })
}

// 获取地图json数据
export function getGeoJson(params) {
  return request({
    url: `/static/json/${params}`,
    method: 'get',
    model: null,
    params: null,
  })
}
