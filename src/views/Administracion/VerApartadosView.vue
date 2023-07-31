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
                                                <tr v-for="apartado in listaapartado" :key="apartado.ID_APARTADO">
                                                      <td>{{ apartado.ID_APARTADO }}</td>
                                                      <td>{{ apartado.producto }}</td>
                                                      <td>{{ apartado.cantidad }}</td>
                                                      <td>{{ apartado.fecha }}</td>
                                                      <td>{{ apartado.cliente }}</td>
                                                      <td>{{ apartado.contacto }}</td>
                                                      <td>{{ apartado.forma_pago }}</td>
                                                      <td>{{ apartado.total_pagar }}</td>
                                                      <td>{{ apartado.estado }}</td>
                                                      <td>{{ apartado.abono }}</td>
                                                </tr>
                                          </tbody>
                                    </v-table>
                              </v-vard-text>
                        </v-card>
                  </v-col>
            </v-container>
      </v-app>
</template>
<script>
export default
{
      created:function()
      {
            this.consultarApartados();
      },
      data() 
      {
            return {
            listaapartado: [],
            }
      },
      methods:
      {
            consultarApartados()
            {
                  fetch('http://poocrud/ordenapartado/select')
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        if(datosRespuesta. msg=='success')
                        {
                              this.listaapartado=datosRespuesta.data;
                        }
                  })
                  .catch(console.log)
            }
      }
}
</script>