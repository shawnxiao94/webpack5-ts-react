/*
 * @Author: your name
 * @Date: 2020-11-05 11:05:12
 * @LastEditTime: 2020-11-05 16:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/user.js
 */
import request from '@/utils/request'

export function reqUserInfo(params) {
  return request({
    url: '/userInfo',
    method: 'post',
    params,
  })
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get',
  })
}

export function deleteUser(params) {
  return request({
    url: '/user/delete',
    method: 'post',
    params,
  })
}

export function editUser(params) {
  return request({
    url: '/user/edit',
    method: 'post',
    params,
  })
}

export function reqValidatUserID(params) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    params,
  })
}

export function addUser(params) {
  return request({
    url: '/user/add',
    method: 'post',
    params,
  })
}
