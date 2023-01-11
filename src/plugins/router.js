import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import ListGroupEmail from "../views/ListGroupEmail.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
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
    path: "/Signup",
    name: "Signup",
    component: SignUp,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
