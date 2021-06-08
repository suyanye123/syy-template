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
export function uni_request({
  baseurl,
  timeout = 50 * 1000,
  header: headers
}) {
  return {
    get(url, data, header) {},
    post(url, data, header) {},
    put(url, data, header) {},
    delete(url, data, header) {},
  };
}