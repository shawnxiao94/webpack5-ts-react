/*
 * @Author: your name
 * @Date: 2020-11-05 15:59:43
 * @LastEditTime: 2020-11-18 14:32:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/Home/index.js
 */
import request from '@/utils/request'
import * as model from './model.js'

export function getAddressJson(params) {
  return request({
    url: `/static/json/address.json`,
    method: 'get',
    model: null,
    params,
  })
}
// 精确匹配提交
export function submitMatching(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/policy/exactMatching?token=${params.token}`,
    method: 'post',
    model: model.submitMatching,
    params,
  })
}

// 查询匹配结果
export function searchMatchingResult(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/policy/searchMatchingResult`,
    method: 'get',
    model: null,
    params,
  })
}
// 获取下拉框数据
export function getSelectOptions(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/mainDatas`,
    method: 'get',
    model: null,
    params,
  })
}
// 获取下拉框数据
export function getSubDomainByIndustryIds(params) {
  return request({
    url: `${process.env.REACT_APP_ENV_API}/portal/subDomainByIndustryIds`,
    method: 'post',
    model: null,
    params,
  })
}
