export default {
  namespaced: true,
  state: {
    token: "",
    hasLogin: false,
    userInfo: {
      openId: "",
      phone: "",
      name: "",
      avatar: "",
    },
  },
  mutations: {
    // 登录
    login(state, userInfo) {
      state.userInfo.name = userInfo.name || "";
      state.userInfo.phone = userInfo.phone || "";
      state.userInfo.openId = userInfo.openId || "";
      state.userInfo.avator = userInfo.avatar || "";
      state.hasLogin = true; //已登录
      uni.setStorageSync("userInfo", userInfo);
    },
    // 退出
    logout(state) {
      state.userInfo = {};
      state.hasLogin = false;
      uni.clearStorageSync("userInfo");
    },
  },
  actions: {},
};
