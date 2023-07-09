<script setup></script>

<template>
    <br><br><br>
    <div id="titulo"><h1>OFERTAS</h1></div>
    
    <div class="contenedor">
    <div class="carrusel">
    <v-carousel show-arrows="hover" cycle>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel></div></div>
<br><br><br><br><br>
<h1>REMATES</h1>
<div class="contenedor">
    <div class="carrusel">
    <v-carousel show-arrows="hover" cycle>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel></div></div><br><br><br><br><br>
</template>

<style scoped>
h1{
    text-align: center;
}
.carrusel{
    width: 75vw;
}
.contenedor{
    display: flex;
    justify-content: center;
}

</style>