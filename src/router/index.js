import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/common/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/board',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/board',
          name: 'board',
          meta: {
            pageName: 'board',
            keepAlive: false // 不需要缓存
          },
          component: resolve => require(['@/components/tabs/board.vue'], resolve)
        },
        {
          path: '/search',
          name: 'search',
          meta: {
            pageName: 'search',
            keepAlive: false // 不需要缓存
          },
          component: resolve => require(['@/components/tabs/search.vue'], resolve)
        },
        {
          path: '/main',
          name: 'main',
          meta: {
            pageName: 'main',
            keepAlive: false // 不需要缓存
          },
          component: resolve => require(['@/components/tabs/main.vue'], resolve)
        }
      ]
    }
  ]
})
