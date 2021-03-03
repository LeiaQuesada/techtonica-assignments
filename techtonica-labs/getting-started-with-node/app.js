// creates a basic web server run with 'node app.js'
// imports http module
const http = require('http');
const fs = require('fs');

// binds local server's web address
const hostname = '127.0.0.1';
//binds the port number our server is listening for requests and responses on
const port = 3000;


fs.readFile('index.html', (err, html) => {
    if(err){
        throw err;
    }

    // creates a server instance
    const server = http.createServer((req, res) => {
    // response status code set to ok
        res.statusCode = 200;
        // response's header to plain text
        res.setHeader = ('Content-type', 'text/html');
        res.write(html);
        // concludes server's response
        res.end();
    });

// listen takes in port, hostname and callback, outputs text to console
    server.listen(port, hostname, () => {
        console.log('Server running on port ' + port + '...');
    })
});

