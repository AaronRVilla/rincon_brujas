<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
      <v-app id="inspire">
            <v-app-bar style="background-color: #845b93;">
                  <v-app-bar-nav-icon @click="drawer = !drawer">
                        <img src="../imagenes/bruja.ico" alt="logo">
                  </v-app-bar-nav-icon>

                  <v-toolbar-title>Caja</v-toolbar-title>
                  <router-link class="link-box" to="/InicioCajeroView">Inicio</router-link>
                  <router-link class="link-box" to="/NuevaVentaCajeroView">Nueva venta</router-link>
                  <router-link class="link-box" to="/NuevoApartadoCajeroView">Nuevo apartado</router-link>
                  <router-link class="link-box" to="/VerVentasCajeroView">Ver Ventas</router-link>
                  <router-link class="link-box" to="/VerApartadosCajeroView">Ver apartados</router-link>
                  <router-link class="link-box" to="/InfoUsuarioView">InfoUsuario</router-link>
                  <router-link to="/">Cerrar sesion</router-link>
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

.link-box
{
      text-decoration: none;
      color: white;
      padding: 10px;
      font-weight: bold;
      font-size: 18px;
}

.link-box:hover
{
      color: black;
      transition: all.3s;
}
</style>