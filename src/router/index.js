import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/kcHomePage.vue'
import trendingPage from '../pages/kcTrendingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/trending',
      name: 'Trending',
      component: trendingPage
    },
  ]
})

export default router
