import Mock from 'mockjs' // 引入mockjs

import data from './data.json'
import category from './category.json'

// 定义的是首页的服务端数据
Mock.mock('/data', 'get', data)
// 定义的是分类的数据 
Mock.mock('/category', 'get', category)
// 安装mockjs插件才能使用mock模拟服务数据
// npm i mockjs --S
// 如何拿到mockjs模拟服务端的数据？
// ajax-用于请求服务端数据-axios