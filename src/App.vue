<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    // 获取设备信息
    uni.getSystemInfo({
      success: function (res) {
        console.log(res);
      },
    });

    // 获取用户信息
    uni.getUserInfo();
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: "https://example.com/onLogin",
            data: {
              code: res.code,
            },
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
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
