import $store from './store/index'
// 页面白名单
const whiteList = [
  '/',
  '/details/pages/login',
  '/pages/home/index',
  '/pages/report/index',
]

function hasPermission(url) {
  let access_token = $store.state.userinfo.hasLogin
  console.log('路由判断你登录了吗', access_token);
  // 在白名单中或有token，直接跳转
  if (whiteList.indexOf(url) !== -1 || access_token) {
    return true
  }
  return false
}

uni.addInterceptor('navigateTo', {
  // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
  invoke(e) {
    if (!hasPermission(e.url)) {
      uni.reLaunch({
        url: '/details/pages/login'
      })
      return false
    }
    return true
  },
  success(e) {
    // console.log(e)
  }
})

uni.addInterceptor('switchTab', {
  // tabbar页面跳转前进行拦截
  invoke(e) {
    // console.log(e)
    if (!hasPermission(e.url)) {
      uni.reLaunch({
        url: '/details/pages/login'
      })
      return false
    }
    return true
  },
  success(e) {
    // console.log(e)
  }
})