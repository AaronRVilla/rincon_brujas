<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const drawer = ref(null)
</script>

<script>
export default {
      data: () => ({ drawer: null }),
}
</script>
<template>
      <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" style="background-color: #442d4d;">
                  <!--  -->
                  hola
            </v-navigation-drawer>

            <v-app-bar style="background-color: #845b93;">
                  <v-app-bar-nav-icon @click="drawer = !drawer">
                        <img src="../imagenes/bruja.ico" alt="logo">
                  </v-app-bar-nav-icon>

                  <v-toolbar-title>Administración</v-toolbar-title>
                  <div id="options-admin">
                        <router-link class="link-admin" to="/InicioAdministracionView">Inicio</router-link>
                        <router-link class="link-admin" to="/VerVentasView">Ventas</router-link>
                        <router-link class="link-admin" to="/VerApartadosView">Apartados</router-link>
                        <router-link class="link-admin" to="/VerCategoriasView">Categorias</router-link>
                        <router-link class="link-admin" to="/VerProductosView">Inventario</router-link>
                        <router-link class="link-admin" to="/VerEmpleadosView">Empleados</router-link>
                        <router-link class="link-admin" to="">Info Usuario</router-link>
                        <router-link to="/">Cerrar Sesion</router-link>
                  </div>
            </v-app-bar>

            <v-main style="background-color: #cba0e4;">
                  <!--  -->
                  <RouterView/>
            </v-main>
      </v-app>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}

img 
{
      width: 3.2vw;
}

#options-admin
{
      font-size: 20px;
      margin-right: 30px;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* gap: 20px; */
}

.link-admin
{
      text-decoration: none;
      color: white;
      padding: 10px;
      font-weight: bold;
      font-size: 18px;
}

.link-admin:hover
{
      color: black;
      transition: all.3s;
}
</style>