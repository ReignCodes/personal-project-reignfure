const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

router.route('/')
    .get(adminCtrl.admin_console);

router.route('/createResource')
    .get(adminCtrl.create_resource);

router.route('/:_id/reviewResource')
    .get(adminCtrl.submit_resource);

module.exports = router