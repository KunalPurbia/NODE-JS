const http = require('https');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end("Server started");
}).listen(8080, ()=>{
    console.log("Server started");
})