var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers/categoriesController');

/* GET home page. */

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getById);
router.post('/', categoriesController.createCategory);
router.delete('/:id', categoriesController.deleteOne);
router.put('/:id', categoriesController.updateOne);
  
module.exports = router;
