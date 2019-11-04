var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

/* Mostar tests page. Como ejemplo, en app.js hay definido un app.all para la ruta test también
que se ejcutará antes de esta. Sería mejor tener todas las rutas que cumplen una
determinada función agrupadas como en el caso alumnos.js */
router.get('/tests', function(req, res, next) {
  res.render('index', { title: 'Tests', content: 'Pasamos la variable content cuando se accede a /tests' });
});

module.exports = router;
