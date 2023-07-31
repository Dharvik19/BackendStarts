const express = require('express');

const router = express.Router();
//admin/add-product=>get
router.get('/add-product',(req, res, next)=>{
    console.log("the add product page");
     res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add</button></form>') //header text/html
    // res.send({key1:"1"});//header application/json
})


//admin/add-product=>post
//this only triggers from incoming post requests even though we go to the url we would jump to "/"" and not "/product" because it was a get request
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');

})

module.exports = router;