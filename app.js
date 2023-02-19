const http = require("http");
const port = 2000;
const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
        data:"helloooo from server",
    }))
})
console.log(`server is running at http://localhost:${port}`)
server.listen(port);


