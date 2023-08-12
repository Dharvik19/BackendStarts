const path = require('path');
const express = require('express');

const router = express.Router();
const routeDir  = require('../util/path')
const shopControllers = require('../controllers/product')
router.get('/home', shopControllers.getProducts);

module.exports = router;