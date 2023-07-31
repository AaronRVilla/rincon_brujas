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
                  <v-col xs="12" sm="10" md="10" lg="8" xl="8" class=mx-auto>
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
                                                      <th>Opciones</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr v-for="categoria in listaCategoria" :key="categoria.id">
                                                      <td>{{ categoria.id }}</td>
                                                      <td>{{ categoria.nombre }}</td>
                                                      <td>
                                                            <v-btn class="bg-cyan-lighten-1">Modificar</v-btn>
                                                            <v-btn class="bg-red-darken-1" v-on:click="ocultarRegistro(categoria.id)">Cancelar</v-btn>
                                                      </td>
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
            this.consultarCategorias();
      },
      data() 
      {
            return {
            listaCategoria: [],
            }
      },
      methods:
      {
            consultarCategorias()
            {
                  fetch('http://poocrud/categoria/select')
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        if(datosRespuesta. msg=='success')
                        {
                              this.listaCategoria=datosRespuesta.data;
                        }
                  })
                  .catch(console.log)
            },
            ocultarRegsitro(id)
            {
                  fetch('http://poocrud/categoria/delete='+id)
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        
                  })
                  .catch(console.log)
            }
      }
}
</script>