const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

//siteControllers.search
router.use('/search', siteController.search);

//siteControllers.index
router.use('/', siteController.index);

module.exports = router;
