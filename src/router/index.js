import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Asset from '../views/Asset.vue'
import AddAsset from '../views/AddAsset.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Setting.vue')
  },
  {
    path: '/asset',
    name: 'Asset',
    component: Asset
  },
  {
    path: '/asset/add',
    name: 'AddAsset',
    component: AddAsset
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
