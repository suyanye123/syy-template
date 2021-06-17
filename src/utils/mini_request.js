// 基础版本uni_request封装
/* 封装的原因，原生的 uni.request({
  url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
  data: {
    text: 'uni.request'
  },
  header: {
    'custom-header': 'hello' //自定义请求头信息
  },
  success: (res) => {
    console.log(res.data);
    this.text = 'request success';
  }
})
请求头每次网络请求都要单独设置
返回数据的正确性判断每次都要重复大量代码
返回数据格式有变化需要修改所有网络请求的地方
*/

let isTrue = false;
import {
  ObjToParam
} from "./syy_tools.js";
/**
 * @method request 数据请求
 * @parmas method 请求方式
 * @params url 请求参数
 * @params params 请求路径参数
 * @params data 请求方式
 * @params param 请求路径参数
 */