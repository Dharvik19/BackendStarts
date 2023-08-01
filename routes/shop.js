const path = require('path');
const express = require('express');

const router = express.Router();
const routeDir  = require('../util/path')
router.get('/home', (req, res, next)=>{
    res.sendFile(path.join(routeDir ,'views', 'shop.html'))
});

module.exports = router;