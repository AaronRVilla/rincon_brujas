<script setup>
import Inicionavbar  from '../components/Inicionavbar.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router'


</script>
<template>
      <Inicionavbar/>
      <RouterView/>
      <Footer/>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
</style>