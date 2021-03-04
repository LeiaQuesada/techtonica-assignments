const express = require('express');
const app = express();

// npm install pug --save
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // use render to use pug template
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('cards', { prompt: "Who is buried in Grant's tomb?" });
});

app.get('/hello', (res, req) => {
    res.render('hello');
});

app.post('/hello', (res, req) => {
    res.render('hello');
});

app.listen(3000, () +> {
    console.log('This application is running on localhost:3000')
})

