<template>
    <div class="login">
      <h1 class="title">Bienvenido de nuevo!</h1>
      <form action class="form">
        <!--<label class="form-label" for="#email">Correo Electronico:</label>-->
        <input
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Correo Electronico"
        />
        <!--<label class="form-label" for="#password">Contraseña:</label>-->
        <input
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        />
        
        <input class="form-submit" type="submit" value="Iniciar Sesión" />
      </form>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .login {
    padding: 2rem;
  }
  .title {
    text-align: center;
  }
  .form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    /*height: 95%;*/
    min-width: 350px;
    max-width: 100%;
    background-image: url(https://cdn2.vectorstock.com/i/1000x1000/75/76/line-witch-icon-isolated-seamless-pattern-on-blue-vector-41057576.jpg);
    background-repeat: no-repeat;
    /*background-size: 350px ;*/
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  /*.form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;
    &:first-of-type {
      margin-top: 0rem;
    }
  }*/
  .form-input {
    margin-top: 5%;
    padding: 10px 15px;
    background-color: white;
    /*border: 1px solid white;*/
    color: black;
    /*&:focus {
      outline: 0;
      border-color: #1ab188;
    }*/
  }
  .form-submit {
    font-size: 15px;
    font-weight: 900;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background: #1ab188;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: rgb(132, 91, 147);
    }
  }
  </style>