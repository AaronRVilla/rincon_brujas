<script setup></script>
<template>
      <div id="body-menu-inicio">
            <v-container id="container">
                  <h3>OFERTAS</h3>
                  <v-carousel id="carrusel">
                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
                  </v-carousel>
            </v-container>
      </div>
</template>
<style scoped>
#body-menu-inicio 
{
      background-color: #cba0e4;
}

#container
{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
}

h3
{
      margin-top: 20px;
      font-size: 50px;
}

#carrusel
{
      margin-bottom: 80px;
}
</style>