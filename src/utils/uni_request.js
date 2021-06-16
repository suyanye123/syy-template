// 基础版本uni_request封装

import {
  reject,
  resolve
} from "core-js/fn/promise";

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
export function uni_request({
  baseurl
}) {
  return {
    get(myurl, data, header) {
      // 对于 GET 方法的数据，会将data数据转换成 query string
      return new Promise((resolve, reject) => {
        wx.request({
          url: baseurl + myurl,
          header: header,
          timeout: 5000,
          success: (data) => {},
          fail: (err) => {
            console.log('请求erro', err, url);

          }
        })

      })
    },
    post(url, data, header) {},
    put(url, data, header) {},
    delete(url, data, header) {},
  };
}