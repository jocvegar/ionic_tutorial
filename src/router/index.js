import { createRouter, createWebHistory } from "@ionic/vue-router";

import MemoriesPage from "../pages/MemoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    name: "MemoriesPage",
    component: MemoriesPage,
  },
  {
    path: "/memories/new",
    name: "MemoryAddPage",
    component: () => import("../pages/MemoryAddPage.vue"),
  },
  {
    path: "/memories/:id",
    name: "MemoryShowPage",
    component: () => import("../pages/MemoryShowPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
