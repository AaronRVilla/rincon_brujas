<style scoped>
.contenedor
{
      background-color: brown;
}
</style>
<template>
      <v-container class="contenedor">
            <v-form v-on:submit.prevent="agregarRegistro">
                  <input type="text" name="nom_producto" id="nom_producto" placeholder="Nombre del producto" v-model="producto.nom_producto">
                  <input type="number" name="precio" id="precio" placeholder="Precio" v-model="producto.precio">
                  <input type="number" name="existencias" id="existencias" placeholder="Cantidad" v-model="producto.existencias">
                  <input type="text" name="talla" id="talla" placeholder="Talla" v-model="producto.talla">
                  <input type="text" name="color" id="color" placeholder="Color" v-model="producto.color">
                  <input type="text" name="categoria" id="categoria" placeholder="Categoría" v-model="producto.categoria">
                  <input type="file" name="imagen" id="imagen" placeholder="Imagen" v-on:change="producto.imagen">
                  <input type="submit" value="Enviar">
            </v-form>
      </v-container>
</template>
<script>
export default
{
      data()
      {
            return
            {
                  producto:{}
            }
      },
      methods:
      {
            agregarRegistro()
            {
                  console.log(this.producto);
            }
      }
}
</script>