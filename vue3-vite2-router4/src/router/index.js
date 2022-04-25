import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'name',
      component: () => import('../pages/Home.vue')
    }
  ],
})

export default router