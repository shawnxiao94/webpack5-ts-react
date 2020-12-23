/*
 * @Author: your name
 * @Date: 2020-11-04 17:52:13
 * @LastEditTime: 2020-11-04 17:52:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/mock/Permission/index.js
 */
import Mock from 'mockjs'

const permission = {
  Code: 0,
  Result: {
    status: 'scusess',
    data: [
      {
        routerPermissions: ['Home', 'News', 'NewsDetail'],
        btnPermissions: [],
      },
    ],
    message: 'ok',
  },
}

Mock.mock(/\/permission/, permission)
