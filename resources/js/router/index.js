import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import { useUserStore } from "../stores/userStore.js";
import axios from "axios";
import { storeToRefs } from "pinia";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    const store = useUserStore();
    const { isAuthenticated } = storeToRefs(store);

    console.log(isAuthenticated.value, to.name);

    if (to.name === "logout") {
        store.logout();
        window.location.href = "/api/logout";
    }

    await checkAuth();

    if (!isAuthenticated.value && to.name !== "login") {
        return { name: "login" };
    }

    if (isAuthenticated.value && to.name === "login") {
        return { name: "dashboard" };
    }
});

async function checkAuth() {
    const store = useUserStore();
    const { isAuthenticated } = storeToRefs(store);
    const token = localStorage.getItem("token");

    if (!isAuthenticated.value && token) {
        try {
            const response = await axios.get("/api/user", {
                adapter: "xhr",
                withCredentials: true,
                Accept: "application/json",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: `Bearer ${token}`,
                },
            });

            store.setToken(token);
            store.setIsAuthenticated(true);
            store.setUser(response.data);
        } catch (e) {
            console.error(e);
        }
    }
}

export default router;
