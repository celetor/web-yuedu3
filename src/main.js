import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import store from "./plugins/vuex.js";
import "./plugins/md5.js";
import ajax from "./plugins/ajax";
import vuex from "./plugins/vuex";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/**
 * 加载配置
 */
ajax.get("/getReadConfig").then(res => {
  var data = res.data.data();
  if (data) {
    var config = JSON.parse(data);
    vuex.commit("setConfig", config);
  }
});
