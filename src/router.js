import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/app/views/Home.vue'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName "about" */ '@/app/views/About.vue'),
    meta: {
      layout: 'AppLayoutAbout'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName "contacts" */ '@/app/views/Contacts.vue'),
    meta: {
      layout: 'AppLayoutContacts'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName "home" */ '@/app/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
