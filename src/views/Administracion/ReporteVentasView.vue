<style scoped>
.table-title
{
      font-size: 30px;
}
</style>
<template>
      <v-app>
            <v-container>
                  <v-col>
                        <v-card>
                              <v-card-title class="table-title">Reporte de Ventas</v-card-title>
                              <v-card-text>
                                    <v-table>
                                          <thead>
                                                <tr>
                                                      <th>ID_PRODUCTO</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr v-for="venta in listaventas" :key="venta.ID_PRODUCTO">
                                                      <td>{{venta.ID_PRODUCTO  }}</td>
                                                      <td>{{ venta.PRODUCTO }}</td>
                                                      <td>{{ venta.PRECIO }}</td>
                                                      <td>{{ venta.PRECIO_IVA }}</td>
                                                      <td>{{ venta.MONTO_TOTAL }}</td>
                                                      <td>{{ venta.MONTO_TOTAL_IVA }}</td>
                                                      <td>{{ venta.CATEGORIA }}</td>
                                                      <td>{{ venta.FECHA_VENTA }}</td>
                                                      <td>{{ venta.FORMA_PAGO}}</td>
                                                </tr>
                                          </tbody>
                                    </v-table>
                              </v-card-text>
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
            this.consultarVista();
      },
      data() 
      {
            return {
            listavista: [],
            }
      },
      methods:
      {
            consultarVista()
            {
                  fetch('http://poocrud/vista/ReporteVentas')
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        if(datosRespuesta. msg=='success')
                        {
                              this.listavista=datosRespuesta.data;
                        }
                  })
                  .catch(console.log)
            }
      }
}
</script>