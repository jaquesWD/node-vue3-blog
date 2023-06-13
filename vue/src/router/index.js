import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('@/views/article.vue')
    }
  ]
})
 
export default router