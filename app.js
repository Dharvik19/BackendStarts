// const routes = require('./routes');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next)=>{
    console.log("the add product page");
     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add</button></form>') //header text/html
    // res.send({key1:"1"});//header application/json
})



//this only triggers from incoming post requests even though we go to the url we would jump to "/"" and not "/product" because it was a get request
app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');

})

app.use('/',(req, res, next)=>{
    console.log("this aleays runs");
     res.send('<h1>homesjdkhsbbd</h1>') //header text/html
     next();
    // res.send({key1:"1"});//header application/json
})

// const server = http.createServer(routes.handler);

app.listen(3000);