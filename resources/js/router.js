import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('./pages/homepage.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('./pages/About.vue')
    },


  ]
})

export default router
