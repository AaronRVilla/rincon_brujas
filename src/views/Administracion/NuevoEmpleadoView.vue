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
                              <v-card-title class="mx-auto">Nuevo empleado</v-card-title>
                              <v-card-text>
                                    <v-form ref="newsale">
                                          <v-text-field label="Nombre"></v-text-field>
                                          <v-text-field label="Correo"></v-text-field>
                                          <v-text-field label="Contraseña"></v-text-field>
                                          <v-text-field label="Rol"></v-text-field>
                                    </v-form>
                              </v-card-text>
                              <v-actions>
                                    <v-btn>Registrar</v-btn>
                              </v-actions>
                        </v-card>
                  </v-col>
            </v-container>
      </v-app>
</template>
<script></script>