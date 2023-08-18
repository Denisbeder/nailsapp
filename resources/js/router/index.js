import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    const isAuthenticated = false;

    if (!isAuthenticated && to.name !== "login") {
        return { name: "login" };
    }
});

export default router;
