<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
      <header>
            <nav>
                  <div id="logotipo">
                        <img src="../imagenes/bruja.ico" alt="logo">
                        <h1>El rincon de las brujas</h1>
                  </div>
                  <div>
                        <router-link to="/">Inicio</router-link>
                        <router-link to="/ProductosView">Productos</router-link>
                        <router-link to="/CategoriasView">Categorias</router-link>
                        <router-link to="/CuentaView">Cuenta</router-link>
                        <router-link to="/InsertarProductoView">Insertar</router-link>
                  </div>
            </nav>
      </header>
</template>
<style scoped>
      header
      {
            height: 13vh;
            background-color: #845b93;
            display: flex;
            justify-content: center;
      }

      nav
      {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 92vw;
      }

      img
      {
            width: 4.2vw;
      }

      #logotipo
      {
            display: flex;
            gap: 2%;
            font-size: 20px;
            align-items: center;
      }
      h1
      {
            width: 400px;
      }
</style>