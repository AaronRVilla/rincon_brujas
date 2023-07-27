import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import CuentaView from '../views/CuentaView.vue'
import LogInView from '../views/LogInView.vue'
import ForgotPasswordView from '../views/ForgorPasswordView.vue'
import SignUpView from '../views/SignUpView.vue'

import AdministracionView from '../views/Administracion/AdministracionView.vue'
import VerVentasView from '../views/Administracion/VerVentasView.vue'
import VerApartadosView from '../views/Administracion/VerApartadosView.vue'
import NuevoProductoView from '../views/Administracion/NuevoProductoView.vue'
import NuevaCategoriaView from '../views/Administracion/NuevaCategoriaView.vue'
import NuevoEmpleadoView from '../views/Administracion/NuevoEmpleadoView.vue'
import InicioAdministracionView from '../views/Administracion/InicioAdministracionView.vue'
import VerProductosView from '../views/Administracion/VerProductosView.vue'
import VerCategoriasView from '../views/Administracion/VerCategoriasView.vue'
import VerEmpleadosView from '../views/Administracion/VerEmpleadosView.vue'
import ActualizarProductoView from '../views/Administracion/ActualizarProductoView.vue'
import ActualizarCategoriaView from '../views/Administracion/ActualizarCategoriaView.vue'
import NuevaVentaView from '../views/Administracion/NuevaVentaView.vue'
import NuevoApartadoView from '../views/Administracion/NuevoApartadoView.vue'
import InfoUsuario from '../views/InfoUsuarioView.vue'

import InicioCajeroView from '../views/InicioCajeroView.vue'
import NuevaVentaCajeroView from '../views/NuevaVentaCajeroView.vue'
import NuevoApartadoCajeroView from '../views/NuevoApartadoCajeroView.vue'
import VerVentasCajeroView from '../views/VerVentasCajeroView.vue'
import VerApartadosCajeroView from '../views/VerApartadosCajeroView.vue'
import CajeroView from '../views/CajeroView.vue'

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
                              path: '/LogInView',
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
                              path: '/NuevaVentaCajeroView',
                              name: 'NuevaVentaCajeroView',
                              component: NuevaVentaCajeroView
                        },
                        {
                              path: '/NuevoApartadoCajeroView',
                              name: 'NuevoApartadoCajeroView',
                              component: NuevoApartadoCajeroView
                        },
                        {
                              path: '/VerVentasCajeroView',
                              name: 'VerVentasCajeroView',
                              component: VerVentasCajeroView
                        },
                        {
                              path: '/VerApartadosCajeroView',
                              name: 'VerApartadosCajeroView',
                              component: VerApartadosCajeroView
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
                              path: '/InicioAdministracionView',
                              name: 'InicioAdministracionView',
                              component: InicioAdministracionView
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
