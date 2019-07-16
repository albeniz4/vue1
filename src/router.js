import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: Home
    },
    {
      name: 'cf',
      path: '/cf/',
      component: () => import('./views/cf/List.vue')
    },
    {
      name: 'sns',
      path: '/sns/',
      component: () => import('./views/sns/Index.vue')
    },
    {
      name: 'event',
      path: '/event/',
      component: () => import('./views/event/List.vue')
    },
    {
      name: 'notice',
      path: '/notice/',
      component: () => import('./views/notice/List.vue')
    },
    {
      name: 'admin',
      path: '/admin/',
      component: () => import('./views/admin/List.vue')
    }
  ]
})
