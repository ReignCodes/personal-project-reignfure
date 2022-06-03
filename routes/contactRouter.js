const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');

router.route('/')
    .get(contactCtrl.contact_get)
    .post(contactCtrl.contact_post);

router.route('/:_id')
    // put and delete
module.exports = router;