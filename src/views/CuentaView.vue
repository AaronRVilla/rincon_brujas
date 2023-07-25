<script setup>
import { createVuetify } from 'vuetify'
import { RouterView, RouterLink } from 'vue-router'
import colors from 'vuetify/lib/util/colors'

</script>
<template>
      <v-app style="background-color: #cba0e4;">
            <v-container class="my-auto">
                  <v-col cols="10" lg="5" class="mx-auto">
                        <v-card color="#EEEEEE" class="d-flex flex-column px-5 py-5">
                              <RouterView/>
                              <router-link to="/AdministracionView">Adnim</router-link>
                              <router-link to="/CajeroView">Cajero</router-link>
                        </v-card>
                  </v-col>
            </v-container>
      </v-app>
</template>
<style scoped>
</style>