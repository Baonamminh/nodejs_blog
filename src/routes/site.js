const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

//siteControllers.search
router.get('/search', siteController.search);

//siteControllers.index
router.get('/', siteController.index);

module.exports = router;
