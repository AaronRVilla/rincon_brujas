<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
</style>
<template>
        <v-card-title class="mx-auto">Restaurar Contrasenia</v-card-title>
                              <v-card-text>
                                    <v-form ref="login">
                                          <v-text-field label="Nueva contrasenia" required></v-text-field>
                                          <v-text-field label="Confirmar nueva contrasenia" required></v-text-field>
                                    </v-form>
                              </v-card-text>
                              <v-card-actions>
                                    <v-btn color="blue" class="mx-auto">Restaurar</v-btn>
                              </v-card-actions>
                              <router-link to="/LogInView">¿Ya tienes una cuenta?</router-link>
                              <router-link to="/SignUpView">¿No tienes cuenta?</router-link>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>