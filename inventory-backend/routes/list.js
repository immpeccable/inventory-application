let express = require('express');
let router = express.Router();

let category_controller = require('../controllers/categoryController');
let component_controller = require('../controllers/componentController')

router.get('/category', category_controller.category_list);
router.get('/category/:id', category_controller.category_detail);
router.get('/category/create')

router.get('/components', component_controller.component_list);
router.get('/components/:id', component_controller.component_detail);

module.exports = router;