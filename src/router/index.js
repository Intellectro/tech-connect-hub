import { createRouter, createWebHistory } from "vue-router";
import {About, Home, Contact} from "../pages";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;