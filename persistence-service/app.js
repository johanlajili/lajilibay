const express = require('express');
require('./models/ItemToSell');

const expressLogging = require('express-logging');
const logger = require('logops');
const cors = require('cors');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(expressLogging(logger));
app.use('/', routes);

module.exports = app;