const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/siteCtrl');

router.route('/')
    .get(siteCtrl.index);

router.route('/about')
    .get(siteCtrl.about);

router.route('/login')
    .get(siteCtrl.login);

router.route('/submitResource')
    .get(siteCtrl.submitResource);

module.exports = router