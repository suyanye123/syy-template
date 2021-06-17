<script>
import { Base64 } from "./api/base64";
import api from "./api/api";
import { baseurl } from "./api/request";
export default {
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
          uni.request({
            method: "POST",
            url: baseurl + api.getOpenid,
            data: {
              authType: 1,
              code: res.code,
            },
            header: {
              Authorization:
                "Basic " + Base64.encode("yuke-client-uac:yukeClientSecret"),
            },
            success: (res) => {
              console.log("获取到openId", res);
              // 通过penId获取到用户信息，然后自动登录,拿到token
              uni
                .request({
                  method: "POST",
                  url:
                    baseurl + api.Login + "&openId=" + res.data.result.openId,
                  header: {
                    Authorization:
                      "Basic " +
                      Base64.encode("yuke-client-uac:yukeClientSecret"),
                  },
                })
                .then((res) => {
                  console.log("res自动登录", res);
                });
              //如果无用户信息则代表未注册
            },
            fail: (res) => {
              console.log("获取openid失败", res);
            },
          });
        },
        fail: (res) => {
          console.log("wx.login失败", res);
        },
      });
    },
  },
  onLaunch: function () {
    console.log("App Launch，开发环境为" + process.env.NODE_ENV);
    // 1.隐藏原生tabbar
    uni.hideTabBar();

    this.getSystemInfo();

    uni.getStorage({
      key: "userInfo",
      success: (res) => {
        //说明以前登陆过，本地保存有openid和user信息
        this.$store.commit("userinfo/login", res.data);
        this.$isResolve();
      },
      fail: () => {
        //第一次登录，获取code
        this.getUserInfo();
        this.$isResolve();
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
