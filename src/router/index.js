import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import inicioView from '../views/inicioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicioView
    },
    {
      path:"/inventario",
      name: 'inventario',
      component:()=> import('../views/InventarioView.vue') 
    },
    {
      path: '/generarVenta',
      name: 'generarventa',
      component: ()=> import('../views/GenerarVentaView.vue')
    }, {
      path:"/apartado",
      name: 'apartado',
      component:()=> import('../views/ApartadoView.vue') 
    },
    {
      path: '/agregarinventario',
      name: 'agregarinventario',
      component: ()=> import('../views/AgregarinventarioView.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: ()=> import('../views/CategoriasView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/loginView.vue')
    },
  ]
})

export default router
