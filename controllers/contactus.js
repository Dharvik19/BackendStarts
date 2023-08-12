const path = require('path');

const rootDir = require('../util/path');

exports.getContactUs=(req, res, next)=>{
    res.sendFile(path.join(rootDir,"views", 'contact.html'));
}

exports.postContact =(req, res, next)=>{
    res.send("<h1>From filled succesfully</h1>");
}