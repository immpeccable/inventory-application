let express = require('express');
let router = express.Router();

let category_controller = require('../controllers/categoryController');
let component_controller = require('../controllers/componentController');

router.post('/category/create' , category_controller.category_create_post);

router.get('/category', category_controller.category_list);

router.post('/category/:id/delete', category_controller.category_delete_post)

router.get('/category/:id', category_controller.category_detail);



router.get('/components', component_controller.component_list);

router.post("/component/create", component_controller.component_add)

router.post("/components/:id/delete", component_controller.component_delete_post)

router.get('/components/:id', component_controller.component_detail);


module.exports = router;