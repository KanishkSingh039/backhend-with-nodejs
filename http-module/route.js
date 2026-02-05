const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end("hello routing");
    }
    else if (url === '/home') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end("HOME");
    }
    else if (url === '/product') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end("Product");
    }
    else if (url === '/home/product') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end("home Product");
    } else {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end('page not found')
    }
});

const port = 3000;

server.listen(port, () => {
    console.log('server started');
})