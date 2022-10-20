const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!!');
}).listen(5000, () => {
    console.log("Server started on port 5000");
})