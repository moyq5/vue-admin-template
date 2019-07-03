<script>
//import Vue from "vue";
import Vue from 'vue/dist/vue.js';
import VueRouter from "vue-router";
import FormBasic from "./FormBasic";
import FormWizard from "./FormWizard";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: FormBasic },
  { path: '/form-basic', component: FormBasic },
  { path: '/form-wizard', component: FormWizard }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
	router
})

export default {
  name: "PageWrapper"
};
</script>
