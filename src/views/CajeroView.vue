<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'

</script>
<template>
      <v-app id="inspire">
            <!-- <v-navigation-drawer v-model="drawer" style="background-color: #442d4d;">
                  
                  <router-link to="/">Inicio</router-link>
            </v-navigation-drawer> -->

            <v-app-bar style="background-color: #845b93;">
                  <v-app-bar-nav-icon @click="drawer = !drawer">
                        <img src="../imagenes/bruja.ico" alt="logo">
                  </v-app-bar-nav-icon>

                  <v-toolbar-title>Caja</v-toolbar-title>
                  <router-link to="/">Inicio</router-link>
                  <router-link to="/NuevaVentaView">Nueva venta</router-link>
                  <router-link to="/NuevaApartadoView">Nuevo apartado</router-link>
                  <router-link to="/InfoUsuarioView">InfoUsuario</router-link>
            </v-app-bar>

            <v-main style="background-color: #cba0e4;">
                  <!--  -->
                  <RouterView/>
            </v-main>
      </v-app>
</template>
<style scoped>
img
{
      width: 3.2vw;
}
</style>