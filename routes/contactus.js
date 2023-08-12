const express  = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router  =  express.Router();

const contactController = require('../controllers/contactus')
router.get('/contact', contactController.getContactUs);

router.post("/success",contactController.postContact );

module.exports = router;