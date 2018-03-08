const http = require("http");

const hostname = "localhost";
const port = 8080;
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello World");
    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
});