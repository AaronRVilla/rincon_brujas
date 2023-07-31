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
                                                      <th>Id Ord. venta</th>
                                                      <th>Producto</th>
                                                      <th>Cantidad</th>
                                                      <th>Cliente</th>
                                                      <th>Forma de pago</th>
                                                      <th>Fecha</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr v-for="venta in listaventas">
                                                      <td>{{ venta.ID_VENTA }}</td>
                                                      <td>{{ venta.nom_producto }}</td>
                                                      <td>{{ venta.cantidad }}</td>
                                                      <td>{{ venta.cliente }}</td>
                                                      <td>{{ venta.forma_pago }}</td>
                                                      <td>{{ venta.fecha }}</td>
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
            this.consultarVentas();
      },
      data() 
      {
            return {
            listaventas: [],
            }
      },
      methods:
      {
            consultarVentas()
            {
                  fetch('http://poocrud/ordenventa/select')
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        if(datosRespuesta. msg=='success')
                        {
                              this.listaventas=datosRespuesta.data;
                        }
                  })
                  .catch(console.log)
            }
      }
}
</script>