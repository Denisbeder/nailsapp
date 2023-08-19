import { defineStore } from "pinia";

const initialState = { isAuthenticated: false, token: null, user: null };

export const useUserStore = defineStore("user", {
    state: () => initialState,
    getters: {},
    actions: {
        setIsAuthenticated(payload) {
            this.isAuthenticated = payload;
        },
        setToken(payload) {
            this.token = payload;
        },
        setUser(payload) {
            this.user = payload;
        },
        setAuthenticated(payload) {
            this.token = payload.token;
            this.isAuthenticated = true;
            this.user = payload.user;
            localStorage.setItem("token", payload.token);
        },
        logout() {
            console.log("aaaaaaaaa");
            this.token = null;
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem("token");
        },
    },
});
