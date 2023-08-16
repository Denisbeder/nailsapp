import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
import Error404 from '../pages/errors/404.vue';

export default [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Error404
    }
];
