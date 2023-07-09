<template>
  <div class="container">
    <h1>Pantalla de Apartado</h1>
    <form @submit.prevent="submitApartado">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="form-group">
        <label for="producto">Producto:</label>
        <input type="text" id="producto" v-model="producto" required>
      </div>
      <div class="form-group">
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" v-model="cantidad" min="1" required>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha de apartado:</label>
        <input type="date" id="fecha" v-model="fecha" required>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" v-model="telefono" required>
      </div>
      <button type="submit">Apartar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      producto: '',
      cantidad: 1,
      fecha: '',
      telefono: ''
    };
  },
  methods: {
    submitApartado() {
      // Aquí puedes agregar la lógica para enviar el apartado a un servidor o realizar alguna acción
      console.log('Apartado enviado');
      console.log('Nombre:', this.nombre);
      console.log('Producto:', this.producto);
      console.log('Cantidad:', this.cantidad);
      console.log('Fecha de apartado:', this.fecha);
      console.log('Teléfono:', this.telefono);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="date"],
input[type="tel"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
