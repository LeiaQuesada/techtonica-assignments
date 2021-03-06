// node's require statement: imports express module and binds it to variable, used express variable to access all methods and properties of the express module 
const express = require('express');

const models = require('./models');

// binds a str containing the web address of our local server
// const hostname = ('4.17.1');
// create app object by binding it to the top-level express() function exported by the Express module above
const app = express();

// binds port number we are listening for requests and responses on 
const port = 3000;

// we call the listen method on the server object (express server), passing in the port 3000 and the callback function as arguments. run node index.js which verifies the server is running 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

app.get('/', (req, res) => {
    // this call back will run when the client requests this route 
    res.send('WELL THIS IS WORKING')
})

//.get takes two params path, and callback. here it creates a route, using / routes to the root route
app.get('/event/5432', (req, res) => {
    // this call back will run when the client requests this route 
    res.send(models.party);
})