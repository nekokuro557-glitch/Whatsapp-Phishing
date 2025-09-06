const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/recibir-datos', (req, res) => {
  const data = req.body;
  fs.writeFileSync('data/received-data.json', JSON.stringify(data, null, 2));
  res.send('Datos recibidos');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
