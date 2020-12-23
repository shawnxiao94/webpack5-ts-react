/*
 * @Author: your name
 * @Date: 2020-11-05 16:40:47
 * @LastEditTime: 2020-11-12 11:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-react-ts/src/mock/Home/index.js
 */
import Mock from 'mockjs'

const TableList = () => {
  return {
    code: 200,
    data: [
      {
        key: '1',
        name: 'John Brown',
        gender: 'male',
        age: 32,
        email: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        gender: 'female',
        age: 42,
        email: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        gender: 'male',
        age: 32,
        email: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ],
    total: 30,
  }
}

Mock.mock(/\/getTableList/, 'get', TableList)
