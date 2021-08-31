var express = require('express');
var router = express.Router();
const vehiclesController = require('../controllers/vehiclesController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vehicles' });   
});

router.get('/cars', vehiclesController.getAllCars);
router.get('/cars:id', vehiclesController.getById);
router.post('/cars', vehiclesController.createCar);
router.delete('/cars', vehiclesController.deleteOne);
router.put('/cars', vehiclesController.updateOne);

router.get('/motorbikes', function(req, res, next) {
    res.render('index', { title: 'Motorbike' });
  });
module.exports = router;
