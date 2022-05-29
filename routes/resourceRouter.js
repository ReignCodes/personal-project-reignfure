const express = require('express');
const router = express.Router();
const resourceCtrl = require('../controllers/resourceCtrl');

router.route('/')
    .post(resourceCtrl.submit)

/* not implemented */

// router.route('/:_id')
//     .get(resourceCtrl.)