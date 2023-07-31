// const routes = require('./routes');
const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log("in the middleware");
    next();//allows the request to continue in second middleware
})
app.use((req, res, next)=>{
    console.log("in the second middleware");
    // res.send('<h1>Hello from express</h1>') header text/html
    res.send({key1:"1"});//header application/json
})

// const server = http.createServer(routes.handler);

app.listen(3000);