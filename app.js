const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// set the port
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//body parser from tutorial (https://www.youtube.com/watch?v=nF9g1825mwk&list=WL&index=2&t=0s)
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})