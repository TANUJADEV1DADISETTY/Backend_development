import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, () => {"Content-Type" : "text/plain"});
    res.end('Hello this is from backend');
});

server.listen(7007, () => {
    Console.log("Server running at Port 7007")
})