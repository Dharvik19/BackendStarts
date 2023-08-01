const express  = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router  =  express.Router();

router.get('/contact', (req, res, next)=>{
    res.sendFile(path.join(rootDir,"views", 'contact.html'));
})

router.post("/success", (req, res, next)=>{
    res.send("<h1>From filled succesfully</h1>");
})

module.exports = router;