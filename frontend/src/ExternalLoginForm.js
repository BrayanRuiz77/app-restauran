import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import RegisterForm from './RegisterForm';

function ExternalLoginForm({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

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
        onLoginSuccess({ nombre: data.nombre, apellido: data.apellido });
        navigate('/pantalla-inicio'); // Redirige a la pantalla de inicio
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error de conexión con el servidor');
    }
  }

  function handleRegister(data) {
    console.log('Datos de registro:', data);
    // Aquí puedes agregar la lógica para enviar los datos a tu base de datos
  }

  return (
    <div className="contenedor-login">
      
      <h3>{isLogin ? 'Inicio de sesión' : 'Registro'}</h3>

      {isLogin ? (
        <form onSubmit={iniciarSesion}>
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Contraseña" required />
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
