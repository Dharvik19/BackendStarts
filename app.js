const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }else if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>This is the Home page </h1></body>');
        res.write('</html>');
        return res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to about page </h1></body>');
        res.write('</html>');
        return res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to my node js project </h1></body>');
        res.write('</html>');
        return res.end();
    }
    console.log('dharvik');
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Firs</title></head>');
    res.write('<body><h1>Hello hellooooo</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);