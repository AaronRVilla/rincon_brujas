<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="superior"><div class="titulo">El Rincón de las Brujas</div>
  <div class="navegacion">
    <RouterLink to="/">Inicio</RouterLink>
    <!-- <RouterLink to="/blusas">blusas</RouterLink> -->
    <!-- <RouterLink to="/camisas">camisas</RouterLink> -->
    <!-- <RouterLink to="/shorts">shorts</RouterLink> -->
    <!-- <RouterLink to="/conjuntos">conjuntos</RouterLink> -->
    <!-- <RouterLink to="/vestidos">vestidos</RouterLink> -->
    <!-- <RouterLink to="/cinturones">cinturones</RouterLink> -->
    <!-- <RouterLink to="/zapatillas">zapatillas</RouterLink> -->
    <!-- <RouterLink to="/huaraches">huaraches</RouterLink> -->
    <RouterLink to="/inventario">Inventario</RouterLink>
    <RouterLink to="/GenerarVenta">Generar Venta</RouterLink>
    <router-link to="/apartado">Apartado</router-link>
    <router-link to="/agregarinventario">agregar inventario</router-link>
  </div></div>
  <div class="cont" style="background-color: gray;">
    <RouterView/>
  </div>
  <footer style="background-color: bisque;">
  <div><h2>CONTACTANOS</h2></div>
  <div class="info">
    <div id="face">Facebook</div>
    <div id="whats">Facebook</div>
    <div id="ubi">Facebook</div>
  </div>
  </footer>
</template>

<style scoped>
.superior{
  display: flex;
  height: 15vh;
  padding: 1%;
  background-color: violet;
}
footer{
  height: 20vh;
}
.titulo{
  width: 70%;
  font-size: 3em;
}
.navegacion{
  width: 30%;
  font-size: 2em;
  display: flex;
  gap: 10px;
  text-decoration: none;
  margin-left: -300px;
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
</style>
