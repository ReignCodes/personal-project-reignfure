const express = require('express');
const router = express.Router();
const resourceCtrl = require('../controllers/resourceCtrl');

// router.route('/fridges')
//     .get(resourceCtrl.all_fridges);

// router.route('/meals')
//     .get(resourceCtrl.all_meals);

// router.route('/shelters')
//     .get(resourceCtrl.all_shelters);

// why does the styling on this form break when I try to make it /submit?
router.route('/')
    .get(resourceCtrl.submit_resource_get)
    .post(resourceCtrl.submit_resource_post);

/* not implemented */

// router.route('/:_id')
//     .get(resourceCtrl.)

module.exports = router