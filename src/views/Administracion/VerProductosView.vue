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
                  <v-col xs="12" sm="12" md="12" lg="12" xl="12" xxl="12" class="mx-auto">
                        <v-card>
                              <div class="options">
                                    <v-card-title class="table-title">Inventario</v-card-title>
                                    <router-link class="newrecord-link" to="/NuevoProductoView">
                                                <v-btn class="bg-blue">Nueva producto</v-btn>      
                                    </router-link>
                              </div>
                              <v-vard-text>
                                    <v-table>
                                          <thead>
                                                <tr>
                                                      <th>Id_producto</th>
                                                      <th>Nombre</th>
                                                      <th>Precio</th>
                                                      <th>Existencias</th>
                                                      <th>Talla</th>
                                                      <th>Color</th>
                                                      <th>Categoría</th>
                                                      <th>Imagen</th>
                                                      <th>Opciones</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr v-for="producto in listaproducto" :key="producto.id">
                                                      <td>{{ producto.id }}</td>
                                                      <td>{{ producto.nom_producto }}</td>
                                                      <td>{{ producto.precio }}</td>
                                                      <td>{{ producto.existencias }}</td>
                                                      <td>{{ producto.talla }}</td>
                                                      <td>{{ producto.color }}</td>
                                                      <td>{{ producto.nombre }}</td>
                                                      <td>{{ producto.imagen }}</td>
                                                      <td>
                                                            <v-btn class="bg-cyan-lighten-1">Modificar</v-btn>
                                                            <v-btn class="bg-red-darken-1" v-on:click="ocultarRegistro(categoria.id)">Cancelar</v-btn>
                                                      </td>
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
<script>

export default
{
      created:function()
      {
            this.consultarProductos();
      },
      data() 
      {
            return {
            listaproducto: [],
            }
      },
      methods:
      {
            consultarProductos()
            {
                  fetch('http://poocrud/producto/verproducto')
                  .then(respuesta=>respuesta.json())
                  .then(datosRespuesta=>
                  {
                        console.log(datosRespuesta)
                        
                        if(datosRespuesta. msg=='success')
                        {
                              this.listaproducto=datosRespuesta.data;
                        }
                  })
                  .catch(console.log)
            }
      }
}
</script>