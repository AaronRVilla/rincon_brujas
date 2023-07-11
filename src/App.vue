<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="superior">
    <img class="logo" src="./imagenes/bruja.ico">

    <div class="titulo">El Rincón de las Brujas</div>

  <div class="navegacion">
    <RouterLink class="router" to="/">Inicio</RouterLink>
    <RouterLink class="router" to="/categorias"> Categorias </RouterLink>
    <RouterLink class="router" to="/inventario">Inventario</RouterLink>
    <RouterLink class="router" to="/GenerarVenta">Generar Venta</RouterLink>
    <RouterLink class="router" to="/apartado">Apartado</RouterLink>
    <RouterLink class="router" to="/agregarinventario">Agregar inventario</RouterLink>
    <RouterLink to="/login"><v-btn icon=""><img src="../src/imagenes/user.ico" id="user"/></v-btn></RouterLink>
    
  </div></div>
  <div class="cont" style="background-color: rgb(203, 160, 228)">
    <RouterView/>
  </div>
  <footer style="background-color: rgb(132, 91, 147)">
  <div><h2>CONTACTANOS</h2></div>
  <div class="info">
    <div id="face">Facebook</div>
    <div id="whats">WhatsApp</div>
    <div id="ubi">Dirección</div>
  </div>
  </footer>
</template>

<style scoped>
.logo{
  display: flex;
  margin-left: -4.5vh;
}
.superior{
  display: flex;
  height: 15vh;
  padding: 1%;
  background-color: rgb(132, 91, 147);
  justify-content: space-around;
}
footer{
  height: 20vh;
}
.titulo{
  width: 32vw;
  font-size: 3em;
  margin-right: 34vb;
  margin-left: -9.2vh;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.navegacion{
  width: 56vw;
  justify-content: center;
  align-items: center;
  font-size: 1m;
  display: flex;
  gap: 10vh;
  text-decoration: none;
  margin-left: -300px;
}
.router
{
  text-decoration: none;
  font-weight: bold;
}
.info{
  display: flex;
}
#face{
  width: 33%;
}
#whats{
  width: 33%;
}
#ubi{
  width: 33%;
}
#user{
  width: 100%;
  height: 100%;
}
</style>
