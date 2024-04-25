import React from 'react';

function RegisterForm({ onRegister }) {
  function registrar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('emailRegistro').value;
    var password = document.getElementById('passwordRegistro').value;

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Llamar a la función onRegister del componente padre
    onRegister({ nombre, apellido, email, password });
  }

  return (
    <form>
      <input type="text" id="nombre" placeholder="Nombre" />
      <input type="text" id="apellido" placeholder="Apellido" />
      <input type="email" id="emailRegistro" placeholder="Email" />
      <input type="password" id="passwordRegistro" placeholder="Contraseña" />
      <button type="button" onClick={registrar}>REGISTRARSE</button>
    </form>
  );
}

export default RegisterForm;
