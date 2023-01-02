import * as VueRouter from 'vue-router'

/*
https://router.vuejs.org/zh/guide/#html
 */
const routes = [
  { path: '/:branch/:topic', component: () => import('@/components/AreaPanel/AreaPanel') },
  { path: '/', component: () => import('@/components/AboutUs/AboutUs') },
  { path: '/:pathMatch(.*)*', name: 'PageNo404', component: () => import('@/components/404/404') },
]

const router_v3 = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router_v3
