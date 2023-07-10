<script setup></script>
<template>
      <div id="new-sale-container">
            <h3>Generar nueva venta</h3>
            <form action="">
                  <div class="input-newsale">
                        <input type="text" placeholder="Cliente">
                  </div>
                  <div class="input-newsale">
                        <input type="text" placeholder="Producto">
                  </div>
                  <div class="input-newsale">
                        <input type="number" placeholder="Cantidad">
                  </div>
                  <div class="input-newsale">
                        <input type="text" placeholder="Forma de pago">
                  </div>
                  <div class="input-newsale">
                        <input type="date" placeholder="Fecha">
                  </div>
                  <div id="btn-container">
                        <input type="submit" id="btn-gen-new-sale" value="Generar nueva venta">
                  </div>
            </form>
      </div>
</template>
<style scoped>
*
{
      font-family: 'Century Gothic', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      --color_gris: #808080;
      --color_gris_claro: #a9a9a9;
      --color_blanco_input: #e2e2e2;
      --color_negro: #000000;
      --color_blanco: #ffffff;
      --color_verde_oscuro: #006400;
      --color_verde: #008000;
      --color_verde_claro: #00ff00;
}

#new-sale-container
{
      width: 92%;
      margin: auto;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
}

#new-sale-container h3
{
      font-size: 40px;
}

#new-sale-container form
{
      display: flex;
      justify-content: center;
      flex-direction: column;
      border: 3px solid var(--color_gris);
      background-color: var(--color_gris_claro);
      padding: 20px;
      width: 42%;
      border-radius: 10px;
      gap: 20px;
}

.input-newsale
{
      display: flex;
      flex-direction: column;
      align-items: center;
}

.input-newsale input
{
      border: 1px solid var(--color_negro);
      background-color: var(--color_blanco_input);
      padding: 10px;
      width: 80%;
      font-weight: bold;
}

.input-newsale input:focus
{
      padding: 16px;
      background-color: var(--color_blanco);
      font-weight: 100;
      color: var(--color_negro);
      transition: all .3s;
      border-radius: 10px;
}

#btn-gen-new-sale
{
      background-color: var(--color_verde);
      border: 2px solid var(--color_verde_oscuro);
      border-radius: 5px;
      color: var(--color_negro);
      font-weight: bold;
      padding: 10px;
}

#btn-container
{
      display: flex;
      justify-content: center;
}

#btn-gen-new-sale:hover
{
      background-color: var(--color_verde_claro);
      border: 2px solid var(--color_verde);
      transition: all .4s;
      color: white;
}
</style>