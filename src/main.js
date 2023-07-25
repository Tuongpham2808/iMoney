import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { registerGlobalComponents } from "./ultis/import";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount("#app");
