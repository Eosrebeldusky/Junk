var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource Users');
});

router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;
