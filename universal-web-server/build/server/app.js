'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var client = _express2.default.static(_path2.default.join(__dirname, '../client'));
var shared = _express2.default.static(_path2.default.join(__dirname, '../shared'));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname + '../../../public/favicon.ico')));
app.use((0, _cors2.default)());
app.use(client);
app.use(shared);

app.get('*', _router2.default);

exports.default = app;