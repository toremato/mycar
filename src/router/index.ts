import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Car from "../views/Car.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/cars",
    name: "Cars",
    component: () => import("../views/Cars.vue"),
  },
  {
    path: "/cars/new",
    name: "NewCar",
    component: () => import("../views/Car.vue"),
  },
  {
    path: "/cars/:id",
    name: "Car",
    component: () => import("../views/Car.vue"),
    // component: Car,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
