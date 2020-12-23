/*
 * @Author: your name
 * @Date: 2020-11-05 11:04:40
 * @LastEditTime: 2020-11-11 18:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/login.js
 */
import request from '@/utils/request'

export function reqLogin(params) {
  return request({
    url: '/loGin',
    method: 'post',
    params,
  })
}

export function reqLogout(params) {
  return request({
    url: '/logout',
    method: 'post',
    params,
  })
}
