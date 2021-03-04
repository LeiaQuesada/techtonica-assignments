const express = require('express');
const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

// template engine enables us to use static template files in our app. At runtime, the template engine replaces variables in a template file with actual values and transforms the template into an HTML file sent to the client.
//sets the view engine to the parameter pug 
// npm install pug --save
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // use render to use pug template
    res.render('index.pug');
});

app.get('/cards', (req, res) => {
    // render takes two params, locals which can be defined like this:
    // res.locals.prompt = "Who is buried in Grant's tomb?";
    // or like this:
    res.render('card', { prompt: "Who is buried in Grant's tomb?", colors });
});

app.listen(3000, () +> {
    console.log('This application is running on localhost:3000')
})
