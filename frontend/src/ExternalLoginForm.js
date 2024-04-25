import React from 'react';
import './App.css';

function ExternalLoginForm() {
  function iniciarSesion() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Contraseña:', password);
  }

  return (
    <div className="contenedor-login">
      <h2>Inicio de sesión</h2>
      <form>
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Contraseña" />
        <button type="button" onClick={iniciarSesion}>INICIAR SESIÓN</button>
      </form>
      <button className="enlace-registro">¿No tienes cuenta?</button>
      <button className="enlace-registro">Regístrate aquí</button>
    </div>
  );
}

export default ExternalLoginForm;
