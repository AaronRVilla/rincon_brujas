<script setup></script>
<template>
      <div id="fondo-inv">
            <h1>Inventario</h1>
            <div id="items-list">
                  <table>
                        <thead>
                              <tr  id="campos">
                                    <th>ID</th>
                                    <th>NOMBRE DEL PRODUCTO</th>
                                    <TH>PRECIO</TH>
                                    <th>EXISTENCIAS</th>
                                    <th>TALLA</th>
                                    <th>COLOR</th>
                                    <th>CATEGORÍA</th>
                                    <th>DESCRIPCIÓN</th>
                              </tr>
                        </thead>
                        <tbody></tbody>
                  </table>
            </div>
      </div>
</template>
<style scoped>
#fondo-inv
{
      background-color: white;
      width: 92%;
      margin: auto;
      padding: 32px;
      font-family: 'Century Gothic', sans-serif;
}

#fondo-inv table
{
      background-color: darkgray;
      width: 100%;
}

#campos
{
      display: flex;
      justify-content: space-around;
}
</style>