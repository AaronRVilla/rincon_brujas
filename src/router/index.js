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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
    }
  ]
})

export default router
