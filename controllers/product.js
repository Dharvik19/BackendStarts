const path = require('path');

const rootDir = require('../util/path');

exports.getAddProduct=(req, res, next)=>{
    console.log("the add product page");
     res.sendFile(path.join(rootDir, 'views', 'add-product.html'))//header text/html
    // res.send({key1:"1"});//header application/json
}

exports.postAddProduct=(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProducts=(req, res, next)=>{
    res.sendFile(path.join(rootDir ,'views', 'shop.html'))
}