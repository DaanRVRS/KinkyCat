import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/kcHomePage.vue'
import trendingPage from '../pages/kcTrendingPage.vue'
import loginPage from '../pages/kcLoginPage.vue'
import createPostPage from '../pages/kcCreatePost.vue'
import editPostPage from '../pages/kcEditPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
      meta: {
        hideHeader: false,
        hideFooter: false,
      }
    },
    {
      path: '/trending',
      name: 'Trending',
      component: trendingPage,
      meta: {
        hideHeader: false,
        hideFooter: false,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: loginPage,
      meta: {
        hideHeader: true,
        hideFooter: true,
      }
    },
    {
      path: '/new-post',
      name: 'createPost',
      component: createPostPage,
      meta: {
        hideHeader: true,
        hideFooter: true,
      }
    },
    {
      path: '/edit-post',
      name: 'editPost',
      component: editPostPage,
      meta: {
        hideHeader: true,
        hideFooter: true,
      },
    }
  ]
})

export default router
