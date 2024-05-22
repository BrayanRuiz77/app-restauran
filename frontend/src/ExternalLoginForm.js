import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function ExternalLoginForm({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function toggleForm() {
    setIsLogin(!isLogin);
    setError('');
  }

  async function iniciarSesion(e) {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, rellena todos los campos.');
      return;
    }

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
        console.log('Inicio de sesión exitoso:', data);
        onLoginSuccess();
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
  }

  function handleRegister(data) {
    console.log('Datos de registro:', data);
    // Aquí puedes agregar la lógica para enviar los datos a tu base de datos
  }

  return (
    <div className="contenedor-login">
      <h2>{isLogin ? 'Inicio de sesión' : 'Registro'}</h2>

      {isLogin ? (
        <form onSubmit={iniciarSesion}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
