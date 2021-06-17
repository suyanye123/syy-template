// 后端提供接口保存在此处
export default {
  long: "114.402208",
  lati: "30.491676",
  img: "http://store.syy123.com/", //图片前缀地址
  getOpenid: "/uac/auth/openid/code2openid", //发送openId 判断是否有登录账号
  Login: "/uac/auth/openid?imageCode=mobile", //自动登录

  getUserMsg: "/uac/user/loginAfter", //带token获取用户信息，name,userId等
  getShopId: "/smc/shop/app/", //根据userId获取shopId
  Home_nearStore: "/smc/mall/shop/app/nearShopsAndReferenceShop", //get拼接坐标（如果登录需要userId）获取附近店铺，可分页（page\size）
  getInfo: "/uac/acc/user/loginUserInfo/current", //get获取商家个人信息

  reToken: "/uac/auth/user/refreshToken?accessToken=", //token刷新
};