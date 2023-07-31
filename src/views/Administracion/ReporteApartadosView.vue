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
                              <v-card-title class="table-title"></v-card-title>
                              <v-card-text>
                                    <v-table>
                                          <thead></thead>
                                          <tbody>
                                                <tr v-for="venta in listaventas"></tr>
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
                  fetch('http://poocrud/vista/ReporteApartados')
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