import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      { path: '', name: 'Main', component: () => import('@/views/Home.vue') },
      { path: 'scholl', name: 'Parent', component: () => import('@/components/Parent.vue') },
      { path: 'brother-1', name: 'brother-1', component: () => import('@/components/Child-first.vue') },
      { path: 'brother-2', name: 'brother-2', component: () => import('@/components/Child-second.vue') },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
