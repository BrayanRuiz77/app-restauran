import React, { useState } from 'react';
import './App.css';
import RegisterForm from './RegisterForm';

function ExternalLoginForm({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  async function iniciarSesion(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess(data);
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
  }

  function handleRegister(data) {
    console.log('Datos de registro:', data);
  }

  return (
    <div className="contenedor-login">
      <h1>Restaurante JAM Delights</h1>
      <h2>{isLogin ? 'Inicio de sesión' : 'Registro'}</h2>

      {isLogin ? (
        <form onSubmit={iniciarSesion}>
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Contraseña" />
          {error && <p className="error">{error}</p>}
          <button type="submit">INICIAR SESIÓN</button>
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
