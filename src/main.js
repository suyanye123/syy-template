import Vue from "vue";
import App from "./App";

import { http } from "./api/service";
Vue.prototype.$http = http;

import store from "./store"; //引入vuex
Vue.prototype.$store = store; //挂载vuex

// import "./router.js"; //简易路由器，可不用

import uView from "uview-ui";
Vue.use(uView);

// 引入uView对小程序分享的mixin封装
let mpShare = require("uview-ui/libs/mixin/mpShare.js");
Vue.mixin(mpShare);

//用于让页面的onload在APP onlaunch异步任务后执行
Vue.prototype.$onLaunched = new Promise((resolve) => {
  Vue.prototype.$isResolve = resolve;
});

// 生产环境不提示tips
Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();
