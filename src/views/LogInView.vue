<style scoped></style>
<template>
      <FormLogIn/>
      <router-link to="/SignUpView">¿No tienes cuenta?</router-link>
      <router-link to="/ForgotPasswordView">¿Olvidaste tu contraseña</router-link>
</template>
<script setup>
      import FormLogIn from '../components/FormLogIn.vue'
      import { RouterLink } from 'vue-router'
</script>