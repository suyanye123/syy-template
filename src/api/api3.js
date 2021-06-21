import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'https://www.baidu.com'
  return config
})


export default {
  apis: {
    api1(data) {
      return minRequest.get('/s', data)
    }
  }
}
/** 在main.js中导入
 * import MinRequest from './MinRequest'
 * import minRequest from './api'
 * 注册请求 Vue.use(MinRequest)
 * const app = new Vue({
    ...App,
    minRequest
})
app.$mount()
 *
 *使用方法1
	testRequest1 () {
		this.$minApi.uniapp({wd: 'uni-app'}).then(res => {
			this.res = res
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},
  使用方法2
	async testRequest2 () {
		try {
			const res = await this.$minApi.uniapp({wd: 'uni-app'})
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

 */