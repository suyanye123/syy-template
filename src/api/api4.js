import Request from '../utils/request4'
// 创建请求对象
const request = new Request({
  baseURL: 'https://****'
})

const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}


// 请求拦截器
request.interceptors.request.use(config => {
  config.header.Authorization = '可以添加凭证 token'

  return config
})

// 响应拦截器
request.interceptors.response.use(response => {

  // 业务处理
  const {
    data,
    statusCode
  } = response
  const {
    response: res,
    code,
    msg
  } = data

  // 状态码不是 200 说明出错了
  if (statusCode !== 200) {
    // 及时抛出错误
    // uni.showToast 自行处理 可以配置要不要弹框
    return Promise.reject(codeMessage[statusCode] || '请求失败')
  }

  // 成功了只要数据其他都不要
  if (code === 1) {
    return res
  }

  // 处理 code 不等于 1 的情况
  // uni.showToast 自行处理 可以配置要不要弹框
  return Promise.reject(msg)

}, err => {
  // uni.showToast 自行处理 可以配置要不要弹框
  return Promise.reject(err.errMsg)
})

// 经过上面处理后
// 调用请求我们就可以只关注成功的逻辑，屏蔽掉一些不必要的判断和错误处理
// 发送请求
request.request({
  url: 'https://****',
  data: {
    wd: 'uni-app'
  }
}).then(res => {
  console.log(res)
  // 只有走到这里就是成功的
  // 不会在这里判断是否成功了
}).cacth(err => {
  console.log(err)
  // 失败逻辑
  // 可以统一在响应拦截器处理
})