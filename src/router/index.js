import { createRouter, createWebHistory } from "vue-router";
import Getters from "@/components/Getters.vue";
import Mutations from "@/components/Mutations.vue";

const routes = [
  {
    path: "/getters",
    name: "getters",
    component: Getters,
  },
  {
    path: "/mutations",
    name: "mutations",
    component: Mutations,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
