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
                                    <v-card-title class="table-title">Apartados</v-card-title>
                                    <router-link class="newrecord-link" to="/NuevoApartadoView">
                                                <v-btn class="bg-blue">Nuevo apartado</v-btn>      
                                    </router-link>
                              </div>
                              <v-vard-text>
                                    <v-table>
                                          <thead>
                                                <tr>
                                                      <th>Id</th>
                                                      <th>Producto</th>
                                                      <th>Cantidad</th>
                                                      <th>Fecha</th>
                                                      <th>Cliente</th>
                                                      <th>Contacto</th>
                                                      <th>Forma de pago</th>
                                                      <th>Total a pagar</th>
                                                      <th>Estado</th>
                                                      <th>Abono</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td></td>
                                                      <td></td>
                                                </tr>
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