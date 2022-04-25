<script>
export default {
  // 此处globalData为了演示其作用
  globalData: {
    username: "白居易",
  },
  methods: {
    // 获取设备信息
    getSystemInfo() {
      uni.getSystemInfo({
        success: (res) => {
          console.log("systeminfo", res);
          this.$store.commit("device/setBarHeight", res.statusBarHeight);
        },
      });
    },
    // 获取用户信息
    getUserInfo() {
      uni.login({
        provider: "weixin",
        success: (res) => {
          console.log("wx.login成功", res); //此时获得code，根据code换取openID
        },
        fail: (res) => {
          console.log("wx.login失败", res);
        },
      });
    },
  },
  onLaunch() {
    console.log("App Launch，开发环境为" + process.env.NODE_ENV);
    // 1.隐藏原生tabbar
    uni.hideTabBar();

    this.getSystemInfo();
    this.$isResolve();
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss"; /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
page {
  height: 100%;
  background: #fff;
}
</style>
