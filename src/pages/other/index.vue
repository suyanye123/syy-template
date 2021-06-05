// 其他页面
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
        其他
      </p>
    </u-navbar>
    <!-- 内容 -->
    其他
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
export default {
  data() {
    return {
      mybar: mybar,
    };
  },
  methods: {},
};
</script>
<style  lang='scss' scoped >
</style>
