import { createRouter, createWebHashHistory } from 'vue-router'
import Components from '../pages/Components/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/components'
    },
    {
      path: '/guide',
      redirect: '/guide/install'
    },
    {
      path: '/components',
      redirect: '/components/icon'
    },
    // -------------------------------
    {
      path: '/components',
      component: Components,
      children: [

        {
          path: '/components/icon',
          component: () => import('@/views/Icon/main.vue'),
        },
        {
          path: '/components/formulaEditor',
          component: () => import('@/views/FormulaEditor/main.vue'),
        },
      ]
    },
    {
      path: '/guide',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Guide/main.vue'),
      children: [
        {
          path: '/guide/install',
          component: () => import('@/views/install/main.vue'),
        },
        {
          path: '/guide/useIcon',
          component: () => import('@/views/useIcon/main.vue'),
        },
      ]
    }
  ]
})

export default router
