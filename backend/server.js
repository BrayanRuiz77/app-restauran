const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_restaurante',
  port: 3306,
});

// Conexión a la base de datos
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
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Error al buscar usuario:', err);
      res.status(500).send({ message: 'Error al buscar usuario' });
      return;
    }
    if (results.length === 0) {
      res.status(401).send({ message: 'Usuario no encontrado' });
      return;
    }
    const user = results[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      res.status(401).send({ message: 'Contraseña incorrecta' });
      return;
    }
    res.status(200).send({ message: 'Inicio de sesión exitoso', nombre: user.nombre, apellido: user.apellido });
  });
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
