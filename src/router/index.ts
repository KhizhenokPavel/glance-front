import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView/HomeView.vue";
import CatalogView from "@/views/CatalogView/CatalogView.vue";
import SectionView from "@/views/SectionView/SectionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/catalog',
      component: CatalogView,
    },
    {
      path: '/catalog/:sectionName',
      component: SectionView,
    },
  ]
})

export default router
