'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Admin = require('./Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _CreateItemToSell = require('./CreateItemToSell');

var _CreateItemToSell2 = _interopRequireDefault(_CreateItemToSell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {};
		return _this;
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var state = this.props.state;

			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'hero' },
					_react2.default.createElement(
						'div',
						{ className: 'hero-body' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'h1',
								{ className: 'title' },
								' Johan sells his stuff'
							),
							_react2.default.createElement(
								'h2',
								{ className: 'subtitle' },
								' I\'m moving to a smaller place, and it\'s time to do some spring cleaning! From geeky stuff like comic books to furniture. And as an added bonus, 30% of the sales will go to xxxx charity. '
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						_reactRouterDom.Switch,
						null,
						_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: function component(props) {
								return _react2.default.createElement(_Home2.default, _extends({ games: _this2.state.games }, props));
							} }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/admin', exact: true, component: _Admin2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { path: '/admin/create', exact: true, component: _CreateItemToSell2.default })
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;