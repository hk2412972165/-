import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
      requireAuth: false,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
      requireAuth: true,
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/cate",
    name: "cate",
    meta: {
      title: "分类",
      requireAuth: false,
    },
    component: () => import("../views/CateView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: {
      title: "购物车",
      requireAuth: false,
    },
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    meta: {
      title: "详情",
      requireAuth: true,
    },
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/my",
    name: "my",
    meta: {
      title: "我的",
      requireAuth: false,
    },
    component: () => import("../views/MyView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
