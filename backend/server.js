const express = require('express');
const mysql = require("mysql")

const app = express();
const PORT = 3000;


// Configuración de la conexión a la base de datos

const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password:'',
  database:'login_restaurante',
  port : 3306
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos');
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {

  const { nombre, apellido, email, password } = req.body;
  const newUser = { nombre, apellido, email, password };
  connection.query('INSERT INTO usuarios SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      res.status(500).send('Error al registrar usuario');
      return;
    }
    console.log('Usuario registrado exitosamente');
    res.status(200).send('Usuario registrado exitosamente');
  });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  
  const { email, password } = req.body;
  connection.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, result) => {
    if (err) {
      console.error('Error al iniciar sesión:', err);
      res.status(500).send('Error al iniciar sesión');
      return;
    }
    if (result.length === 0) {
      console.log('Credenciales incorrectas');
      res.status(401).send('Credenciales incorrectas');
      return;
    }
    console.log('Inicio de sesión exitoso');
    res.status(200).send('Inicio de sesión exitoso');
  });
});

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });