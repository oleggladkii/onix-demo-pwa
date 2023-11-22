import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/LandingView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/RegistrationView.vue"),
  },
];

export default routes;
