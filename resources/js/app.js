import './bootstrap';

import {createApp} from 'vue';
import router from "./router";
import App from './components/App.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import Error404 from './pages/errors/404.vue';

const app = createApp({});

app.use(router);

app.component('app', App);
app.component('login', Login);
app.component('dashboard', Dashboard);
app.component('error404', Error404);

app.mount('#app');
