<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
</style>
<template>
     <v-card-title class="mx-auto">Registrate</v-card-title>
                              <v-card-text>
                                    <v-form ref="SigUp">
                                          <v-text-field label="Nombre" required></v-text-field>
                                          <v-text-field label="Correo" required></v-text-field>
                                          <v-text-field label="Contrasenia" required></v-text-field>
                                          <v-text-field label="Confirmar contrasenia" required></v-text-field>
                                    </v-form>
                              </v-card-text>
                              <v-card-actions>
                                    <v-btn color="blue" class="mx-auto">Registrarse</v-btn>
                              </v-card-actions>
                              <router-link to="/LogInView">¿Ya tienes una cuenta?</router-link>
                              <router-link to="/ForgotPasswordView">¿Olvidate tu contrasenia?</router-link>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>