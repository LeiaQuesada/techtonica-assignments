const express = require('express');
// npm install body-parser --save
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
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
    res.render('hello', { name: req.body.username });
});

app.post('/hello', (res, req) => {
    res.render('hello');
});

app.listen(3000, () => {
    console.log('This application is running on localhost:3000')
})

