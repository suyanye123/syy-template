// Home 页面
<template>
  <view>
    <!-- 自定义navbar，内部可插入文字、图片 -->
    <u-navbar :is-back="false"
              :background="{ background: '#fff' }"
              :borderBottom="false">
      <p style="
          font-size: 40rpx;
          color: #333;
          font-weight: bold;
          padding-left: 28rpx;
        ">
        首页
      </p>
    </u-navbar>
    <!-- 内容 -->
    <view @click="getUserInfo">点击获取用户信息</view>

    <view>当前为您报时{{time}}</view>
    <!-- 自定义tabbar -->
    <u-tabbar v-model="current"
              :list="mybar"
              hide-tab-bar
              active-color="#F22B32"
              inactive-color="#C1C5C7"
              icon-size="60rpx"
              height="112rpx" />
  </view>
</template>
<script>
import { mybar } from "../../static/mybar";
import { mytime } from "../../utils/syy_tools";
export default {
  data() {
    return {
      mybar: mybar,
      time: "",
      timer: null,
    };
  },
  methods: {
    // 2021年4月28日后微信变更后获取用户信息的新接口为 getUserProfile,必须用户点击触发，且每次都会弹窗授权
    getUserInfo() {
      console.log("获取用户信息userinfo");
      uni.getUserProfile({
        desc: "Wexin", // 这个参数是必须的
        success: (res) => {
          console.log("用户信息", res);
        },
        fail: (err) => {
          console.log("获取用户信息失败", err);
        },
      });
    },
  },
  onShow() {
    this.timer = setInterval(() => {
      this.time = mytime(new Date().getTime(), "/");
    }, 1000);
  },
  onUnload() {
    clearInterval(this.timer);
  },
};
</script>
<style  lang='scss' scoped >
</style>
 