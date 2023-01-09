import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
