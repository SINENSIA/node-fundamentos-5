const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Hora de la solicitud: ', new Date().toLocaleTimeString("es-ES"));
  next();
});

router.get('/', function(req, res, next) {
  res.send('Página de Inicio de alumnos');
});

router.param("id", function(req, res, next, param){
  console.log("Solicitado parámetro id, validamos");
  
  if (!isNaN(+param)) {
    next();
  } else {
    res.send('El id proporcionado no es un número');
  }
  
});
router.get('/:id', function(req, res, next) {
  res.send('Buscamos y presentamos el alumno ' + req.params.id);
});

router.post('/:nombre/:edad', function(req,res,next) {
  console.log(req.params.nombre, req.params.edad);
  // Llamamos a la función que crea una alumno
  res.send('Usuario creado.');
});

module.exports = router;


router.get('/:id', function(req, res, next) {
  res.send('Buscamos y presentamos el alumno ' + req.params.id);
});
router.post('/:id', function(req, res, next) {
  res.send('Buscamos y presentamos el alumno ' + req.params.id);
});
