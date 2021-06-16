import Vue from "vue";
import App from "./App";

import store from "./store"; //引入vuex
import $request from "./api/request";

import uView from "uview-ui";

Vue.prototype.$store = store; //挂载vuex
Vue.prototype.$request = $request;

// 生产环境不提示tips
Vue.config.productionTip = false;
Vue.use(uView);

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();