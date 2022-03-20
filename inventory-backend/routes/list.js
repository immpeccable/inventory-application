let express = require('express');
let router = express.Router();

let category_controller = require('../controllers/categoryController');


router.get('/category', category_controller.category_list);

module.exports = router;
//let category_controller = 