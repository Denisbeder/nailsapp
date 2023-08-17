//import "./bootstrap";

import { createApp } from "vue";
import router from "./router";
import AppComponent from "./components/AppComponent.vue";

const App = createApp({});

App.use(router);

App.component("AppComponent", AppComponent);

App.mount("#app");
