import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function registrar(e) {
    e.preventDefault();

    if (!nombre || !apellido || !email || !password) {
      setError('Por favor, rellena todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registro exitoso:', data);
        onRegister(data);
      } else {
        setError(data.message || 'Error al registrarse');
      }
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
  }

  return (
    <form onSubmit={registrar}>
      <input
        type="text"
        id="nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        id="apellido"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="email"
        id="emailRegistro"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="passwordRegistro"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">REGISTRARSE</button>
    </form>
  );
}

export default RegisterForm;
