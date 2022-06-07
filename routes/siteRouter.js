const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/siteCtrl');

router.route('/')
    .get(siteCtrl.index);

router.route('/about')
    .get(siteCtrl.about);

router.route('/login')
    .get(siteCtrl.login)
    .post(siteCtrl.login_post);

router.route('/logout')
    .get(siteCtrl.logout);

router.route('/thankYou')
    .get(siteCtrl.thank_you);

router.route('/contactThankYou')
    .get(siteCtrl.contact_thank_you);

module.exports = router