import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewTarjeta from '../views/ViewTarjeta.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
  },
  {
    path: '/heroe/:id',
    name: 'heroe',
    component: ViewTarjeta,
  },
  {
    path: '/editHeroe/:id',
    name: 'editHeroe',
    component: EditView,
  }
]
localStorage
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
