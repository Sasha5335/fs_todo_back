const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./middlewares/error.handlers');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', router);

app.use(errorHandler);

module.exports = app;
