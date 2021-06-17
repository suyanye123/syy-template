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
export function request({
  defaulturl = false,
  method,
  url,
  data,
  param = {},
  Check = true,
}) {
  if (Object.keys(param).length) {
    url += ObjToParam(param);
  }
  console.log(url, data, param);

  return new Promise((resolve, reject) => {
    uni.getStorage({
      key: "token",
      complete: (res) => {
        wx.request({
          url: defaulturl ?
            "http://192.168.3.121:7979" + url : "https://api.yuke520.com" + url,
          data,
          method,
          header: Check ? {
            "Content-Type": "application/json",
            Authorization: res.data ?
              "Bearer " + res.data.token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiKiJdLCJsb2dpbk5hbWUiOiJ0ZXN0IiwiZXhwIjoxNjE2NzUwOTA5LCJhdXRob3JpdGllcyI6WyIxIiwiNiIsIjI5MzQ0NTcxODk3NzQxMzEyMCIsIjciXSwianRpIjoiYmQzMmNlNzItYmM2ZC00N2YxLTlkNjEtMTExNmIzZTQ3ZTBkIiwiY2xpZW50X2lkIjoieXVrZS1jbGllbnQtdWFjIiwidGltZXN0YW1wIjoxNjE2NzQzNzA5ODQ3fQ.gDligzeNOfLq6xjIIKakcTAMUkcZbWEURW51qSyx7rU",
          } : {},
          timeout: 5000,
          success: ({
            data
          }) => {
            console.log("data成功", data);
            if (
              data.error == "invalid_token" ||
              (data.status == 401 && isTrue == false)
            ) {
              // reject(data);
              return new Promise((resolve, reject) => {
                console.log(
                  "token过期");
                uni.request({
                  method: "get",
                  url: "https://api.yuke520.com" +
                    api.reToken +
                    res.data.token +
                    "&refreshToken=" +
                    res.data.refreshToken,
                  header: {
                    Authorization: "Basic " +
                      Base64.encode("yuke-client-uac:yukeClientSecret"),
                  },
                  success: (res) => {
                    console.log("刷新token", res);
                    isTrue = true;
                    resolve(res);
                  },
                  fail: (err) => {
                    console.log("刷新token失败", err);
                  },
                });
              }).then((res) => {
                console.log("fanhui", res);
                if (res.data.code == 200 && res.data.result) {
                  let obj = JSON.parse(res.data.result);
                  console.log("obj刷新后", obj);
                  uni.setStorage({
                    key: "token",
                    data: {
                      token: obj.access_token,
                      refreshToken: obj.refresh_token,
                    },
                    success: (responseData) => {
                      //重新请求
                      console.log("token刷新的url", url);
                      uni.request({
                        url: defaulturl ?
                          "http://192.168.3.121:7979" + url : "https://api.yuke520.com" + url,
                        data,
                        method,
                        header: Check ? {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + obj.access_token,
                        } : {},
                        timeout: 5000,
                        success: (res) => {
                          console.log("刷新token后的数据", res);
                          resolve(res.data);
                        },
                        fail: (err) => {
                          console.log("刷新token后失败的数据", err);
                        },
                      });
                    },
                  });
                }
              });
            }
            if (data.code == 200) {
              resolve(data);
            }
          },
          fail: (err) => {
            console.log("请求erro", err, url);
            reject(err);
          },
        });
      },
    });
  });
}