import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/users') {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify({Name : 'Tanuja'}));
    }
    else {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end('Hello this is from backend');
    }
});

server.listen(7007, () => {
    console.log("Server running at Port 7007")
});