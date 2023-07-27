<script setup></script>
<template>
      <div id="body-menu-inicio">
            <v-container id="container">
                  <v-col id="subcontainer" xs="12" sm="10" md="10" lg="10" xl="10" xxl="10">
                        <h3>OFERTAS</h3>
                  <v-carousel id="carrusel">
                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
                  </v-carousel>
                  </v-col>
            </v-container>
      </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}

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

#subcontainer
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