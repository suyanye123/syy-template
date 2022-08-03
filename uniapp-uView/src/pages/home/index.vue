// Home 页面
<template>
  <view>
    <!-- 自定义navbar，内部可插入文字、图片 -->
    <u-navbar :is-back="false" :background="{ background: '#fff' }" :borderBottom="false">
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

    <view>当前为您报时{{ time }}</view>
    <h1>历史上的今天：</h1>
    <view v-for="(item, index) in list" :key="index">
      {{ item.date }} {{ item.title }}
    </view>
    <!-- 自定义tabbar -->
    <u-tabbar v-model="current" :list="mybar" hide-tab-bar active-color="#F22B32" inactive-color="#C1C5C7"
      icon-size="60rpx" height="112rpx" />
  </view>
</template>
<script>
import { mybar } from "../../static/mybar";
import { mytime } from "../../utils/syy_tools";
import { getMsg } from "../../api/apis";

export default {
  data() {
    return {
      mybar: mybar,
      time: "",
      timer: null,
      list: [],
    };
  },
  methods: {
    // 2021年4月28日后微信变更后获取用户信息的新接口为 getUserProfile,必须用户点击触发，且每次都会弹窗授权
  },
  async onLoad() {
    //用于让页面的onload在onlaunch异步任务后执行
    await this.$onLaunched;
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let riqi = month + "/" + day;
    getMsg(riqi)
      .then((res) => {
        console.log("success", res.data.result);
        this.list = res.data.result;
      })
      .catch((res) => {
        console.log("fail", res);
      });
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
<style lang="scss" scoped></style>
