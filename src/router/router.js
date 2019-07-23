import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/login' }
    },
    {
      path: "*",
      component: () => import('../views/404.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
      redirect: { path: '/home/user' },
      children: [
        {
          path: 'setting',
          component: () => import('../views/Setting.vue')
        },
        //系统管理
        {
          path: 'user',
          component: () => import('../views/sysManage/user.vue')
        },
        {
          path: 'role',
          component: () => import('../views/sysManage/role.vue')
        },
        {
          path: 'menu',
          component: () => import('../views/sysManage/menu.vue')
        },
        {
          path: 'depart',
          component: () => import('../views/sysManage/depart.vue')
        },
        {
          path: 'notice',
          component: () => import('../views/sysManage/notice.vue')
        },
        //门店管理
        //配件管理
        //订单管理
        {
          path:'allorder',
          component:()=>import('../views/orderManage/orderList.vue')
        }
      ]
    },

  ]
})
