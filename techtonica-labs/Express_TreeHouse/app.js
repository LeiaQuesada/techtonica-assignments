const express = require('express');
const app = express();

// template engine enables us to use static template files in our app. At runtime, the template engine replaces variables in a template file with actual values and transforms the template into an HTML file sent to the client.
//sets the view engine to the parameter pug 
// npm install pug --save
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // use render to use pug template
    res.render('index.pug');
});

app.get('/hello' (req, res) => {
    res.send('<h1>Oh lookie, another page..</h1>');
});

app.listen(3000, () +> {
    console.log('This application is running on localhost:3000')
})

