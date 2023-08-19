//import "./bootstrap";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import AppComponent from "./components/AppComponent.vue";

const pinia = createPinia();
const app = createApp({});

app.use(pinia);
app.use(router);

app.component("AppComponent", AppComponent);

app.mount("#app");
