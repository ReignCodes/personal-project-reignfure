const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');

router.route('/')
    .get(contactCtrl.contact_get)
    .post(contactCtrl.contact_post);

router.route('/:_id')
    .put(contactCtrl.contact_put)
    .delete(contactCtrl.contact_delete)
module.exports = router;