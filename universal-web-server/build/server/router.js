'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactDataFetchingComponents = require('react-data-fetching-components');

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _renderFullPage = require('./renderFullPage');

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _styledComponents = require('styled-components');

var _App = require('../shared/components/container/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee(req, res) {
		var sheet, context, app, data, styles, html;
		return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						sheet = new _styledComponents.ServerStyleSheet();
						context = {};
						app = _react2.default.createElement(
							_reactRouterDom.StaticRouter,
							{ context: context, location: req.url },
							_react2.default.createElement(_App2.default, null)
						);
						_context.next = 5;
						return (0, _reactDataFetchingComponents.getAllInitialData)(sheet.collectStyles(app));

					case 5:
						data = _context.sent;
						styles = sheet.getStyleTags();
						html = (0, _server.renderToString)(_react2.default.createElement(
							_reactDataFetchingComponents.ComponentDataStore,
							{ data: data },
							app
						));

						res.status(200).send((0, _renderFullPage2.default)(html, data, styles));

					case 9:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function router(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return router;
}();