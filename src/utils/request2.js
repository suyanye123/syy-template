// 封装一个http 方法，可以刷新token，但是没有拦截器哦，,适合小型项目快速开发，无返回字典，需要全局调用

let temp_request = [],
  is_freshing = false;
/**
 * @param {string} url 
 * @param {string} method 
 * @param {Object} data 
 * @param {Boolean} loading 
 */
const http = function (url, method, data, loading) {
  let params_ = arguments
  return new Promise((resolve, reject) => {
    if (loading) {
      uni.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000,
        mask: true
      })
    }
    data.token = uni.getStorageSync('api_token')

    uni.request({
      url: url,
      method,
      data,
      success(res) {
        if (loading) {
          uni.hideToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000,
          })
        }
        let code = res.data.code
        switch (code) {
          case 0:
            resolve(res.data.data);
            break;
          case 200:
            // other handlers
            break
          case 401:
            // token 过期
            if (!is_freshing) {
              refresh()
            }
            // 关键步骤~~~~
            resolve(new Promise(reslove => {
              temp_request.push(() => {
                reslove(http(...params_))
              })
            }))
            break;
          default:
            reject(res.data.data)
        }
      },
      fail(error) {
        reject(error.data.data)
      },
      complete(res) {

      }
    })
  })
}

function refresh() {
  is_freshing = true
  // 这里用的uni-app 获取微信code， 原生微信小程序 wx.login()
  uni.login({
    provider: 'weixin',
    success: function (loginRes) {
      http('/mob/auth/login/miniProgram', 'post', {
          code
        }, true)
        .then((res) => {
          uni.setStorageSync('api_token', res.token)
          is_freshing = false
          temp_request.map(cb => cb())
          // 清空temp_request
          temp_request = []
        })
        .catch((res) => {
          uni.hideLoading();
        })
    }
  });
}
export default http