import Vue from "vue";
import App from "./App.vue";
import "@/assets/index.css";
import router from "@/router/router";
Vue.config.productionTip = false;
import { createPinia, PiniaVuePlugin } from 'pinia'


Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");


