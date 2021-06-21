import Vue from "vue";
import App from "./App";

import store from "./store"; //引入vuex
import './router.js'
import request from "./api/request";

import uView from "uview-ui";

Vue.prototype.$store = store; //挂载vuex
Vue.prototype.$request = request;

//用于让页面的onload在onlaunch异步任务后执行
Vue.prototype.$onLaunched = new Promise(resolve => {
  Vue.prototype.$isResolve = resolve
})

// 生产环境不提示tips
Vue.config.productionTip = false;
Vue.use(uView);

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();