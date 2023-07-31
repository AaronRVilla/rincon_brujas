<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
*
{
      box-sizing: border-box;
      font-family: 'Quicksand', 'Century Gothic', sans-serif;
}
</style>
<template>
      <v-app style="background-color: #cba0e4;">
            <v-container class="my-auto">
                  <v-col cols="10" lg="5" class="mx-auto">
                        <v-card color="#EEEEEE" class="d-flex flex-column px-5 py-5">
                              <v-card-title class="mx-auto">Nueva categoría</v-card-title>
                              <v-card-text>
                                    <v-form ref="newsale" v-on:submit.prevent="agregarRegistro">
                                           <v-text-field label="Nombre de la categoria" v-model="categoria.nombre"></v-text-field>
                                           <v-actions>
                                    <v-btn type="submit">Registrar</v-btn>
                              </v-actions>
                                    </v-form>
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
            this.agregarRegistro();
      },
       data()
       {
             return {
                  categoria:{}
             }
       },
       methods:
       {
             agregarRegistro()
             {
                   var datosEnviar={nombre:this.categoria.nombre}
                   console.log(datosEnviar);

                    fetch('http://poocrud/categoria/insert', {
                         method:"POST",
                         body:JSON.stringify(datosEnviar)
                    })
                    .then(respuesta=>respuesta.json())
                    .then((datosRespuesta=>{
                         console.log(datosRespuesta);
                    }))
             }
       }
       
}
</script>