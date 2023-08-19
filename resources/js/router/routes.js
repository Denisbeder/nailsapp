export default [
    {
        path: "/",
        redirect: "login",
    },
    {
        path: "/logout",
        name: "logout",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/DashboardView.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("../views/errors/404View.vue"),
    },
];
