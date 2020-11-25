import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = process.env.NODE_ENV === "production";

const vm = new Vue({
  router,
  data: { loading: true },
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  vm.loading = true;

  next();
});