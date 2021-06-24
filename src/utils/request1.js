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


// 全局请求封装，无拦截器哦，返回一个请求字典
const token = uni.getStorageSync('token');
import service from "../api/api1"; // 请求字典


export default (url, method, params) => {
  uni.showLoading({
    title: "加载中"
  });
  const api = service.filter(item => {
    return item.url === url; // 匹配serviceId对应的接口，每个接口都有唯一的service
  });

  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://www.piop.cn/api" + url,
      method: method,
      header: {
        token: token
      },
      data: {
        serviceId: api[0].serviceId,
        ...params
      },
      success(res) {
        resolve(res.data);
        // 响应成功拦截区
      },
      fail(err) {
        reject(err);
        // 响应失败拦截区
      },
      complete() {
        uni.hideLoading();
        // 响应结束拦截区
      }
    });
  });
};