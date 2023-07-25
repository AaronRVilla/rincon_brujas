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

                  <v-toolbar-title>Zona Administrativa</v-toolbar-title>
                  
            </v-app-bar>

            <v-main style="background-color: #cba0e4;">
                  <!--  -->
                  heloo
            </v-main>
      </v-app>
</template>
<style scoped>
img 
{
      width: 3.2vw;
}
</style>