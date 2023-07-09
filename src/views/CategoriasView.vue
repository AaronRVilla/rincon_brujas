<script setup>
import App from '../App.vue';

 
const app = new App({
  el: '#app',
  data: {
  cat: [
    {name: 'Vestidos'},
    {name: 'Conjuntos'},
    {name: 'Calzado'}
  ]
  }
})
</script>

<template>

<v-app id="inspire">

    <!--<v-navigation-drawer
      v-model="drawer"
      temporary
    >
      
    </v-navigation-drawer>-->

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
          <template v-for="nom in cat" :key="name">
            <v-col
              class="mt-2"
              cols="12"
            >
            <strong>Category {{ nom.name }} </strong>

            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  
</template>

<style scoped>

</style>