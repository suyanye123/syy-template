import request from "../utils/request0";

import * as apis from "./api-yuke";
export const api = apis.default;
// 开发环境时为线下地址，生产时为线上

console.log(process.env.NODE_ENV, "baseURL是", baseurl);

request.interceptor.request.use(async (config, ...args) => {
  // 请求拦截器
  uni.getStorageSync('token')
  if (!token) {
    // 如果没得 token
    await new Promise(resolve => {
      //todo
    })
  }
  config.header.Authorization = "Bearer " + token.token; // 把 token 放在请求头
  return config;
});

request.interceptor.response.use(async (response, ...args) => {
  // 响应拦截器
  // 判断为401时，执行刷新token的方法
  const statusCode = response.statusCode;
  if (statusCode == 401) {
    response = await doRefresh(response)
  }
  const code = response.data.code;
  const message = response.data.message;
  if (response.statusCode == 200 && code !== 0 && code !== -1 && code) {
    return response;
  }

});

async function doRefresh(response) {
  //1.通过 refreshToken获取新的token

  //2.替换之前的本地token

  //3.用新token重新请求之前请求失败的接口，return出去，实现无痛刷新
}

request.onerror = (...args) => console.log(args); // 错误监听

export default request;