// creates a basic web server run with 'node app.js'
// imports http module
const http = require('http');

// binds local server's web address
const hostname = '127.0.0.1';
//binds the port number our server is listening for requests and responses on
const port = 3000;

// creates a server instance
const server = http.createServer((req, res) => {
    // response status code set to ok
    res.statusCode = 200;
    // response's header to plain text
    res.setHeader = ('Content-type', 'text/plain');
    // concludes server's response after rendering message
    res.end('Hello my Peoples!');
});

// listen 
server.listen(port, hostname, () => {
    console.log('Server running on port ' + port + '...');
})