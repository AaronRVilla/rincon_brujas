<template>
  <div class="inventory">
    <nav class="navbar">
      <div class="navbar-toggle" @click="toggleMenu">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </div>
      <h1 class="navbar-title">Inventario</h1>
      <ul class="navbar-menu" :class="{ 'show-menu': isMenuOpen }">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ventas</a></li>
        <li><a href="#">Reportes</a></li>
      </ul>
    </nav>
    <div class="add-product">
      <input type="text" v-model="newItem" placeholder="Nuevo artículo" />
      <button @click="addItem">Agregar</button>
    </div>
    <ul class="product-list">
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }}
        <button @click="removeItem(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [
        { id: 1, name: 'Camisa' },
        { id: 2, name: 'Pantalón' },
        { id: 3, name: 'Zapatos' }
      ],
      newItem: '',
      isMenuOpen: false
    };
  },
  methods: {
    addItem() {
      const newItem = {
        id: this.inventory.length + 1,
        name: this.newItem
      };
      this.inventory.push(newItem);
      this.newItem = '';
    },
    removeItem(itemId) {
      this.inventory = this.inventory.filter(item => item.id !== itemId);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
.inventory {
  width: 100vmax;
  height: 100vmax;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
  color: #111;
  border-radius: 5px 5px 0 0;
}

.navbar-title {
  margin: 0;
  font-size: 20px;
}

.navbar-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}

.navbar-menu {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-left: 20px;
}

.navbar-menu li a {
  color: #111;
  text-decoration: none;
}

.show-menu .hamburger:nth-child(2) {
  opacity: 0;
}

.show-menu .hamburger:first-child {
  transform: translateY(8px) rotate(45deg);
}

.show-menu .hamburger:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

.add-product {
  display: flex;
  margin-bottom: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 5px;
  border: 1px solid #111;
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

.product-list {
  list-style-type: none;
  padding: 0;
  color: #111;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #f44336;
}

/* Media Queries */

@media only screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #111;
    width: 100%;
    padding: 10px;
    border-radius: 0 0 5px 5px;
  }

  .navbar-menu.show-menu {
    display: flex;
    flex-direction: column;
  }

  .navbar-menu li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .navbar-menu li:last-child {
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 480px) {
  .inventory {
    padding: 10px;
  }

  .navbar-title {
    font-size: 16px;
  }

  .add-product {
    flex-direction: column;
    margin-bottom: 20px;
  }

  input[type="text"] {
    margin-bottom: 10px;
  }

  li {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  button {
    margin-top: 10px;
  }
}
</style>