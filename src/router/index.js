import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import CategoriasView from '../views/CategoriasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InicioView',
      component: InicioView
    },
    {
      path: '/CategoriasView',
      name: 'CategoriasView',
      component: CategoriasView
    },
    {
      path: '/ProductosView',
      name: 'ProductosView',
      component: ProductosView
    }
  ]
})

export default router
