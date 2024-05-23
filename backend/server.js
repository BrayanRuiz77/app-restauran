const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(cors());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_restaurante',
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos');
});

// Ruta de registro
app.post('/register', (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  const query = 'INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)';
  connection.query(query, [nombre, apellido, email, password], (err, results) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
    res.status(200).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error al buscar usuario:', err);
      res.status(500).send({ message: 'Error al buscar usuario' });
      return;
    }
    if (results.length === 0) {
      res.status(401).send({ message: 'Usuario no encontrado o contraseña incorrecta' });
      return;
    }
    const user = results[0];
    res.status(200).send({ message: 'Inicio de sesión exitoso', nombre: user.nombre, apellido: user.apellido });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});