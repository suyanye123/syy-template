<script>
import mapMutations from "vuex";
export default {
  methods: {
    // ...mapMutations(["user/login"]), //对全局的方法进行监听
  },
  onLaunch: function () {
    console.log("App Launch，开发环境为" + process.env.NODE_ENV);

    // 1.隐藏原生tabbar
    uni.hideTabBar();

    // 2.获取设备信息
    uni.getSystemInfo({
      success: (res) => {
        console.log("systeminfo", res);
        this.$store.commit("device/setBarHeight", res.statusBarHeight);
      },
    });

    // 3.获取用户信息
    let userInfo = uni.getStorageSync("userInfo");
    if (userInfo.openId) {
      this["user/login"](userInfo);
    }
    uni.login({
      provider: "weixin",
      success: (res) => {
        console.log("wx.login成功", res); //此时获得code，code有效时间10min，根据code可以换取openID
      },
      fail: (res) => {
        console.log("wx.login失败", res);
      },
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
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
