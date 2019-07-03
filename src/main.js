import "./dist/css/style.min.css";

import Vue from "vue";
//import Vue from 'vue/dist/vue.js';
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: App.routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
