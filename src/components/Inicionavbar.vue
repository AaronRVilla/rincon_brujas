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
                        <router-link class="link-box" to="/">Inicio</router-link>
                        <router-link class="link-box" to="/ProductosView">Productos</router-link>
                        <router-link class="link-box" to="/CategoriasView">Categorias</router-link>
                        <router-link class="link-box" to="/CuentaView">Cuenta</router-link>
                  </div>
            </nav>
      </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
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