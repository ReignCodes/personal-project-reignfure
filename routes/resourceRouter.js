const express = require('express');
const router = express.Router();
const resourceCtrl = require('../controllers/resourceCtrl');

router.route('/fridges')
    .get(resourceCtrl.all_fridges);

router.route('/meals')
    .get(resourceCtrl.all_meals);

router.route('/shelters')
    .get(resourceCtrl.all_shelters);

router.route('/submit')
    .get(resourceCtrl.submit_resource_get)
    .post(resourceCtrl.submit_resource_post);
    
router.route('/:_id')
    .get(resourceCtrl.resource_detail)
    .put(resourceCtrl.submit_resource_put)
    .delete(resourceCtrl.delete_resource);
    
module.exports = router