import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* https://www.npmjs.com/package/dotenv */
require("dotenv").config(); // Make API_KEY available: process.env.API_KEY

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
