/*
 * @Author: your name
 * @Date: 2020-11-10 16:44:27
 * @LastEditTime: 2020-11-13 16:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/api/matching/model.js
 */
/**
 * Model 数据中转层
 */
export const getUserInfoByJwt = {
  request(params) {
    return params
  },
  response(data) {
    return data?.data?.data
  },
}
export const reqTableList = {
  request(params) {
    return {
      applicationStatus:
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        params.applicationStatus && params.applicationStatus.length
          ? params.applicationStatus.join(',')
          : '',
      competentDepartment:
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        params.competentDepartment && params.competentDepartment.length
          ? params.competentDepartment.join(',')
          : '',
      name: params.name ? params.name : '',
      page: params.pageNumber,
      size: params.pageSize,
    }
  },
  response(data) {
    return data?.data?.data
  },
}
