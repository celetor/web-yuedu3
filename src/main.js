import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import "./plugins/element.js";
import store from "./plugins/vuex.js";
import "./plugins/md5.js";
import Axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Axios.get("/getReadConfig").then(res => {
  var config = JSON.parse(res.data.da);
  this.config = config;
  this.$store.commit("setConfig", config);
});
