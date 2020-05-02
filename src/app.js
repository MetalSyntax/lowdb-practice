const express = require('express')
const morgan = require('morgan');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/task.route'));

module.exports = app;