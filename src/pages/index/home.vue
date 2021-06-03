<template>
  <view>

    <view @click="getUserInfo">点击获取用户信息</view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
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
};
</script>
<style  lang='scss' scoped >
</style>
