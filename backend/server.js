const express = require('express');
const mysql = require("mysql")

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login_restaurante"
})

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

app.get('/', (req, res) => {
    res.send('Hola, mundo desde Express jorge!');
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });