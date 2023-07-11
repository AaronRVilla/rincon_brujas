<script setup>
  import carrusel from '../components/carrusel.vue'
</script>

<template>
    <br><br><br>
    <div id="titulo"><h1>OFERTAS</h1></div>
    <carrusel/>
 <br><br><br><br><br>

    <div id="titulo"><h1>REMATES</h1></div>
    <carrusel/>
  <br><br><br><br><br>
</template>

<style scoped>
h1{
    text-align: center;
}
.contenedor{
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
}
.carrusel{
  width: 25vw;
  height: 75vh;
}
</style>