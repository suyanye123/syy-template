<script>
export default {
  onLaunch: function () {
    console.log("App Launch，开发环境为" + process.env.NODE_ENV);

    // 1.隐藏原生tabbar
    uni.hideTabBar();

    // 2.获取设备信息
    uni.getSystemInfo({
      success: function (res) {
        console.log(res);
      },
    });

    // 3.获取用户信息
    uni.getUserInfo();
    wx.login({
      success(res) {},
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
