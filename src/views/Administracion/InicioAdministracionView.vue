<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
</style>
<template>
      <v-app style="background-color: #cba0e4;">
        <v-container>
          <h3>OFERTAS</h3>
          <v-carousel id="carrusel">
            <v-carousel-item
              v-for="(image, index) in carouselImages"
              :key="index"
              :src="image.src"
              cover
            >
              <v-btn @click="removeImage(index)" color="error">Eliminar</v-btn>
            </v-carousel-item>
          </v-carousel>
          <input type="file" @change="onFileChange" accept="image/*" />
        </v-container>
      </v-app>
    </template>
    
    <script setup>
    import { ref, onMounted } from "vue";
    
    // areglo para guardar imagenes
    const carouselImages = ref([]);
    
    // Function que responda el evento al hacer click
    const onFileChange = (event) => {
      const files = event.target.files;
      if (files && files.length) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
          reader.onload = (e) => {
            const src = e.target.result;
            carouselImages.value.push({ src });
          };
          reader.readAsDataURL(file);
        }
      }
    };
    
    // Function para eliminar las imagenes del carusel
    const removeImage = (index) => {
      carouselImages.value.splice(index, 1);
    };
    
    // cargar imagenes locales
    onMounted(() => {
      const storedImages = JSON.parse(localStorage.getItem("carouselImages"));
      if (Array.isArray(storedImages)) {
        carouselImages.value = storedImages;
      }
    });
    
    // visualisar en mi carusel
    import { watch } from "vue";
    watch(carouselImages, (newImages) => {
      localStorage.setItem("carouselImages", JSON.stringify(newImages));
    });
    </script>
    