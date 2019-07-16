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
      params: {idx:1},
      component: () => import('./views/cf/List.vue')
    },
    {
      name: 'sns',
      path: '/sns/',
      params: {idx:2},
      component: () => import('./views/sns/Index.vue')
    },
    {
      name: 'event',
      path: '/event/',
      params: {idx:3},
      component: () => import('./views/event/List.vue')
    },
    {
      name: 'notice',
      path: '/notice/',
      params: {idx:4},
      component: () => import('./views/notice/List.vue')
    },
    {
      name: 'admin',
      path: '/admin/',
      params: {idx:5},
      component: () => import('./views/admin/List.vue')
    }
  ]
})
