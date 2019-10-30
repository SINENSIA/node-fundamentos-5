
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('¡Hola mundo!');
});

app.listen(8000, function () {
  console.log('Nuestra primera app en express');
});
