import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import LogIn from "../views/LogIn.vue";
import Customer from "../views/Customer.vue";
import Profile from "../views/Profile.vue";

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

  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },

  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
