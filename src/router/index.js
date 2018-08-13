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
    },
    {
      path: '/broadList',
      meta: {
          title: '豆瓣电影Top250',
          keepAlive: false // 不需要缓存
      },
      component: resolve => require(['@/components/broad/list.vue'], resolve),
      beforeEnter: (to, from, next) => {
          window.document.title = to.meta.title
          next()
      }
  },
  {
    path: '/broadItem/:movidId',
    name: 'broadItem',
    meta: {
        title: '豆瓣电影Top250',
        keepAlive: false // 不需要缓存
    },
    component: resolve => require(['@/components/broad/item.vue'], resolve),
    beforeEnter: (to, from, next) => {
        window.document.title = to.meta.title
        next()
    }
  },
  {
    path: '/myWatch',
    name: 'myWatch',
    meta: {
      pageName: 'myWatch'
    },
    component: resolve => require(['@/components/mine/myWatch.vue'], resolve),
  },
  {
    path: '/myorder',
    name: 'myorder',
    meta: {
      pageName: 'myorder'
    },
    component: resolve => require(['@/components/mine/myorder.vue'], resolve),
  }
  ]
})
