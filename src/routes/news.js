const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

//NewsControllers.show
router.use('/:slug', newsController.show);
//NewsControllers.index
router.use('/', newsController.index);

module.exports = router;
