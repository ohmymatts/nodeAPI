const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const url = config.bd_string;
const options = {reconectionTries: Number.MAX_VALUE, reconectionInterval: 500, useNewUrlParser: true}

mongoose.connect(url, options); 
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('erro na conexão com a base')
});

mongoose.connection.on('connected', () => {
    console.log('aplicação conectada')
});

mongoose.connection.on('disconected', () => {
    console.log('aplicação desconectada')
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;
