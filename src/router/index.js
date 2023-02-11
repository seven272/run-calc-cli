import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '@/pages/Calculator.vue'

const routes = [
  {
    path: '/',
    alias: '/calculator',
    name: 'Calculator',
    component: Calculator,
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('@/pages/Start.vue'),
    meta: {
      layout: 'StartLayout'
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/pages/Result.vue'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('@/pages/Plans.vue'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/:404page(.*)',
    name: '404',
    component: () => import('@/pages/Page404.vue'),
    meta: {
      layout: 'MainLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'calculator__header-subtitle-ative'
})

export default router
