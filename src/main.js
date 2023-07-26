import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { registerGlobalComponents } from "./ultis/import";
import Vue3Toastify from "vue3-toastify";
import "./assets/styles/tailwind.css";
import "vue3-toastify/dist/index.css";
import "./assets/styles/global.css";

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.mount("#app");
