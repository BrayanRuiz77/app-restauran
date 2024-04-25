import React, { useState } from 'react';
import './App.css';
import RegisterForm from './RegisterForm';

function ExternalLoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  function iniciarSesion() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Contraseña:', password);
  }

  function handleRegister(data) {
    console.log('Datos de registro:', data);
    // Aquí puedes agregar la lógica para enviar los datos a tu base de datos
  }

  return (
    <div className="contenedor-login">
      <h2>{isLogin ? 'Inicio de sesión' : 'Registro'}</h2>

      {isLogin ? (
        <form>
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Contraseña" />
          <button type="button" onClick={iniciarSesion}>INICIAR SESIÓN</button>
        </form>
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}

      <button className="enlace-registro" onClick={toggleForm}>
        {isLogin ? '¿No tienes cuenta? Regístrate aquí' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
}

export default ExternalLoginForm;
