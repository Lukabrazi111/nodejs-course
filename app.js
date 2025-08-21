const http = require('http');
const express = require('express');

const app = express();

app.use('/', () => {

})

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form></form>');
});

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Home page</h1>');
});

app.listen(3000);