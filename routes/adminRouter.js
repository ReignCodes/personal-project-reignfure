const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

router.route('/')
    .get(adminCtrl.admin);

router.route('/createResource')
    .get(adminCtrl.create_resource);

router.route('/contact/:_id')
    .get(adminCtrl.read_contact);

router.route('/resource/:_id')
    .get(adminCtrl.review_resource);

module.exports = router