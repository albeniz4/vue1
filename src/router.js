import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cf/',
      component: () => import('./views/cf/List.vue')
    },
    {
      path: '/sns/',
      component: () => import('./views/sns/Index.vue')
    },
    {
      path: '/event/',
      component: () => import('./views/event/List.vue')
    },
    {
      path: '/notice/',
      component: () => import('./views/notice/List.vue')
    },
    {
      path: '/admin/',
      component: () => import('./views/admin/List.vue')
    }
  ]
})
