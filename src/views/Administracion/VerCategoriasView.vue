<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}

.options
{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
}

.newrecord
{
      margin-right: 20px;
}

.newrecord-link
{
      text-decoration: none;
      color: aliceblue;
      padding-right: 18px;
}

.table-title
{
      font-size: 30px;
}
</style>
<template>
      <v-app style="background-color: #cba0e4;">
            <v-container>
                  <v-col>
                        <v-card>
                              <div class="options">
                                    <v-card-title class="table-title">Categoría</v-card-title>
                                    <router-link class="newrecord-link" to="/NuevaCategoriaView">
                                                <v-btn class="bg-blue">Nueva Categoría</v-btn>      
                                    </router-link>
                              </div>
                              <v-vard-text>
                                    <v-table>
                                          <thead>
                                                <tr>
                                                      <th>Id</th>
                                                      <th>Nombre de la categoría</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td></td>
                                                      <td></td>
                                                </tr>
                                                <v-btn>Modificar</v-btn>
                                                <v-btn>Cancelar</v-btn>
                                          </tbody>
                                    </v-table>
                              </v-vard-text>
                        </v-card>
                  </v-col>
            </v-container>
      </v-app>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>