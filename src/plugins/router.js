import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import ListGroupEmail from "../views/ListGroupEmail.vue";
import LogIn from "../views/LogIn.vue";
import AdminHome from "../views/AdminHome.vue";

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
    path: "/listGroupEmail",
    name: "email",
    component: ListGroupEmail,
  },

  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },

  {
    path: "/adminHome",
    name: "Admin",
    component: AdminHome,
    meta: {
      needsAuth: false
    }
  }

];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if(to.meta.needsAuth) {
    next('/login');
  } else {
    next();
  }
})

export default router;
