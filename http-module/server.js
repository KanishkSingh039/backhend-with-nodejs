const http = require('http');


const server = http.createServer((req, res) => {
    console.log('server created');
    console.log(req, ' req');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello');
});//http.createserver will create the server and get the request from anywhere on which server should response and it will work only when any response is send

const port = 3000;//this is the port on which the server run and on deployment hide the port by importing it from .env file

server.listen(port, () => {
    console.log("server is started");

})//server.listen will start the server or start the connection with the server  