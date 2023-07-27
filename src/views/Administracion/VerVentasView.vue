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
                                    <v-card-title class="table-title">Ventas</v-card-title>
                                          <router-link class="newrecord-link" to="/NuevaVentaView">
                                                <v-btn class="bg-blue">Nueva venta</v-btn>      
                                          </router-link>
                              </div>
                              <v-vard-text>
                                    <v-table>
                                          <thead>
                                                <tr>
                                                      <th>Id venta</th>
                                                      <th>Producto</th>
                                                      <th>Cantidad</th>
                                                      <th>Forma de pago</th>
                                                      <th>Cliente</th>
                                                      <th>Fecha</th>
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