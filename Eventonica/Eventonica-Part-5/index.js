// node's require statement: imports express module and binds it to variable, used express variable to access all methods and properties of the express module
const express = require('express');

// binds a str containing the web address of our local server
// const hostname = ('4.17.1');
// create app object by binding it to the top-level express() function exported by the Express module above
const app = express();

// binds port number we are listening for requests and responses on 
const port = 3000;

//creates a route, using / routes to the rooot route
app.get('/', (req, res) => {
    // this call back is what happens 
    res.send('What\'s happening now?')
})

// we call the listen method on the server object , passing in the port 3000 and the callback function as arguments. run node index.js which verifies the server is running 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})