const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

const getProductsController = require('../controllers/product')
//admin/add-product=>get
router.get('/add-product',getProductsController.getAddProduct);


//admin/add-product=>post
//this only triggers from incoming post requests even though we go to the url we would jump to "/"" and not "/product" because it was a get request
router.post('/add-product',getProductsController.postAddProduct);

module.exports = router;