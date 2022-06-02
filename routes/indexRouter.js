const express = require('express');
const adminRouter = require('./adminRouter');
const resourceRouter = require('./resourceRouter');
const siteRouter = require('./siteRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/adminConsole', adminRouter);
router.use('/resource', resourceRouter);

module.exports = router;