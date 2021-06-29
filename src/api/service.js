/**
 * @version 3.0.5
 * @Author lu-ch
 * @Email webwork.s@qq.com
 * 文档: https://www.quanzhan.co/luch-request/
 * github: https://github.com/lei-mu/luch-request
 * DCloud: http://ext.dcloud.net.cn/plugin?id=392
 * HBuilderX: beat-3.0.4 alpha-3.0.4
 */

import Request from "luch-request";
let is = true;
// if (process.env.NODE_ENV == "development") {
//   is = true    //线下
// } else {
//   is = false   //线上
// }
const baseurl = is ? "http://v.juhe.cn/todayOnhistory" : "ht";

const getToken = () => {
  let token = "";
  try {
    token = uni.getStorageSync("token");
  } catch (e) {}
  return token;
};
const getfreshToken = () => {
  let token = "";
  try {
    token = uni.getStorageSync("refreshToken");
  } catch (e) {}
  return token;
};
const getid = () => {
  let token = "";
  try {
    token = uni.getStorageSync("deviceId");
  } catch (e) {}
  return token;
};

/**
   * 修改全局配置示例
   const request = new Request({
    header: {a:1}, // 举例
    baseURL: 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest',
    validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
      return statusCode >= 200 && statusCode < 300
    }
  })
   request.config.baseURL = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
   **/

const http = new Request();
http.setConfig((config) => {
  /* 设置全局配置 */
  config.baseURL = baseurl;
  config.header = {
    ...config.header,
    Authorization: "Bearer " + getToken(),
  };
  config.custom = {
    auth: true, // 是否传token
    loading: true, // 是否使用loading
  };
  return config;
});

http.interceptors.request.use(
  (config) => {
    if (config.custom.loading) {
      uni.showLoading();
    }
    // if (config.custom.auth) {
    //   config.header.Authorization = "Bearer " + getToken();
    // }
    console.log("==", !getToken());

    /* 请求之前拦截器。可以使用async await 做异步操作 */
    if (!getToken()) {
      // 如果token不存在，return Promise.reject(config) 会取消本次请求
      console.log("此时一名空的token靓仔高调路过");
      // config.header = {
      //   ...config.header,
      // };
      config.header.Authorization = "Bearer 12345";
      // return Promise.reject(config);
    }
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

http.interceptors.response.use(
  async (response) => {
    /* 请求之后拦截器。可以使用async await 做异步操作  */
    const code = response.statusCode;
    console.log("-----", response);
    if (response.config.custom.loading) {
      uni.hideLoading();
    }
    if (code == 401) {
      // 服务端返回的状态码等于401，则重新请求
      response = await doRequest(response);
      // return Promise.reject(response);
    }
    if (code !== 200) {
      return Promise.reject(response);
    }
    return response;
  },
  (response) => {
    if (response.custom.loading) {
      uni.hideLoading();
    }
    // 请求错误做点什么。可以使用async await 做异步操作
    console.log("请求错误", response);
    return Promise.reject(response);
  }
);

const fresh = new Request();
fresh.setConfig((config) => {
  /* 设置全局配置 */
  config.baseURL = baseurl;
  config.header = {
    ...config.header,
    Authorization: "Bearer " + getfreshToken(),
  };
  config.custom = {
    auth: true, // 是否传token
    loading: false, // 是否使用loading
  };
  return config;
});
// 刷新 token 方法
async function doRequest(response) {
  //1.通过 refreshToken获取新的token
  const res = await fresh("/uac/auth/" + getfreshToken());
  const { code, data } = res.data;
  console.log("看看这是啥", res);

  if (code == 200) {
    //2.替换之前的本地token
    uni.setStorageSync("accessToken", data.accessToken);
    uni.setStorageSync("refreshToken", data.refreshToken);
    let config = response.config;

    //3.用新token重新请求之前请求失败的接口，return出去，实现无痛刷新
    const resold = await http(config);
    return resold;
  } else {
    uni.removeStorageSync("accessToken");
    uni.removeStorageSync("refreshToken");
    uni.showToast({
      title: "登陆过期请重新登陆！",
      icon: "none",
      success() {
        uni.navigateTo({
          url: "/details/pages/login",
        });
      },
    });
  }
}

export { http };

// 更多选择
/**
 * 1.通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 * 参考插件地址  https://ext.dcloud.net.cn/plugin?id=159
 */

/**
 * 2. uni_request.js
 *  https://github.com/yinchengnuo/uni_request
 */
/**
 * 3.uni-app  请求封装
 * https://juejin.cn/post/6911568558170472461#comment
 */
/**
 * 4.MinRequest类
 * https://github.com/134355/min-request
 */
/**
 * 5. uView 提供的封装request
 * https://www.uviewui.com/js/http.html
 */
//  const codeMessage = {
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。'
// }
