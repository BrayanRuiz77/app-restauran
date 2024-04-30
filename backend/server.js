const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola, mundo desde Express jorge!');
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });