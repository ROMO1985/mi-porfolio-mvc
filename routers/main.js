const express = require('express');
const rutaHome = require('../controller/homeController.js');


router = express.Router();

router.get('/',rutaHome.index);

module.exports = router;


