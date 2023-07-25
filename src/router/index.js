import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import CuentaView from '../views/CuentaView.vue'
import CajeroView from '../views/CajeroView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import VerVentasView from '../views/VerVentasView.vue'
import VerApartadosView from '../views/VerApartadosView.vue'
import NuevoProductoView from '../views/NuevoProductoView.vue'
import NuevaCategoriaView from '../views/NuevaCategoriaView.vue'
import NuevoEmpleadoView from '../views/NuevoEmpleadoView.vue'
import VerProductosView from '../views/VerProductosView.vue'
import VerCategoriasView from '../views/VerCategoriasView.vue'
import VerEmpleadosView from '../views/VerEmpleadosView.vue'
import ActualizarProductoView from '../views/ActualizarProductoView.vue'
import ActualizarCategoriaView from '../views/ActualizarCategoriaView.vue'

import NuevaVentaView from '../views/NuevaVentaView.vue'
import NuevoApartadoView from '../views/NuevoApartadoView.vue'
import InfoUsuario from '../views/InfoUsuarioView.vue'
import LogInView from '../views/LogInView.vue'
import ForgotPasswordView from '../views/ForgorPasswordView.vue'
import SignUpView from '../views/SignUpView.vue'
import InicioCajeroView from '../views/InicioCajeroView.vue'

const router = createRouter
({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: 
      [
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
            },
            {
                  path: '/CuentaView',
                  name: 'CuentaView',
                  component: CuentaView,
                  children:
                  [
                        {
                              path: '/',
                              name: 'LogInView',
                              component: LogInView
                        },
                        {
                              path: '/SignUpView',
                              name: 'SignUpView',
                              component: SignUpView
                        },
                        {
                              path: '/ForgotPasswordView',
                              name: '/ForgotPasswordView',
                              component: ForgotPasswordView
                        }
                  ]
            },
            {
                  path: '/CajeroView',
                  name: 'CajeroView',
                  component: CajeroView,
                  children:
                  [
                        {
                              path: '/InicioCajeroView',
                              name: 'InicioCajeroView',
                              component: InicioCajeroView
                        },
                        {
                              path: '/NuevaVentaView',
                              name: 'NuevaVentaView',
                              component: NuevaVentaView
                        },
                        {
                              path: '/NuevoApartadoView',
                              name: 'NuevoApartadoView',
                              component: NuevoApartadoView
                        },
                        {
                              path: '/VerVentasView',
                              name: 'VerVentasView',
                              component: VerVentasView
                        },
                        {
                              path: '/VerApartadosView',
                              name: 'VerApartadosView',
                              component: VerApartadosView
                        },
                        {
                              path: '/InfoUsuarioView',
                              name: 'InfoUsuarioView',
                              component: InfoUsuario
                        }
                  ]
            },
            {
                  path: '/AdministracionView',
                  name: 'AdministracionView',
                  component: AdministracionView,
                  children:
                  [
                        {
                              path: '/NuevaVentaView',
                              name: 'NuevaVentaView',
                              component: NuevaVentaView
                        },
                        {
                              path: '/NuevoApartadoView',
                              name: 'NuevoApartadoView',
                              component: NuevoApartadoView
                        },
                        {
                              path: '/NuevoProductoView',
                              name: 'NuevoProductoView',
                              component: NuevoProductoView
                        },
                        {
                              path: '/NuevaCategoriaView',
                              name: 'NuevaCategoriaView',
                              component: NuevaCategoriaView
                        },
                        {
                              path: '/NuevoEmpleadoView',
                              name: 'NuevoEmpleadoView',
                              component: NuevoEmpleadoView
                        },
                        {
                              path: '/VerVentasView',
                              name: 'VerVentasView',
                              component: VerVentasView
                        },
                        {
                              path: '/VerApartadosView',
                              name: 'VerApartadosView',
                              component: VerApartadosView
                        },
                        {
                              path: '/VerProductosView',
                              name: 'VerProductosView',
                              component: VerProductosView
                        },
                        {
                              path: '/VerCategoriasView',
                              name: 'VerCategoriasView',
                              component: VerCategoriasView
                        },
                        {
                              path: '/VerEmpleadosView',
                              name: 'VerEmpleadosView',
                              component: VerEmpleadosView
                        },
                        {
                              path: '/ActualizarProductoView',
                              name: 'ActualizarProductoView',
                              component: ActualizarProductoView
                        },
                        {
                              path: '/ActualizarCategoria',
                              name: 'ActualizarCategoria',
                              component: ActualizarCategoriaView
                        },
                        {
                              path: '/InfoUsuarioView',
                              name: 'InfoUsuarioView',
                              component: InfoUsuario
                        }
                  ]
            }
      ]
})

export default router
