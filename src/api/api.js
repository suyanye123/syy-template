// request0对应的请求字典
import request from './request'

let is = false
// if (process.env.NODE_ENV == "development") {
//   is = true    //线下
// } else {
//   is = false   //线上
// }
const baseurl =
  is ?
  "http://线下" :
  "https://线上";