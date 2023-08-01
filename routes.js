const fs = require('fs');

const requestHandler =(req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        let mydata = "";
        fs.readFile("message.txt", {encoding:"utf-8"}, (err, data)=>{
            if(err){
                console.log(err);
            }
            console.log("data from file", data);
            mydata = data;
            res.write('<html>');
            res.write('<head><title>First Page</title></head>');
            res.write(`<body>${mydata}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><div id="messages"></div></body>');
            res.write('</html>');
            return res.end();
        })
    
    
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

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFile('message.txt', message, err=>{
                res.statusCode= 302;
                res.setHeader('Location', '/');
                return res.end();
            });
           
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
            res.write('<head><title>First Page</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><div id="messages"></div></body>');
            res.write('</html>');
            
    res.end();
}

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler
// }
exports = requestHandler;