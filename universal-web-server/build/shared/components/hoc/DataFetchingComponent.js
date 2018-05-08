'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	For components that needs to load data before being rendered on the server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


function dataFetchingComponent(WrappedComponent) {
	var _class, _temp;

	return _temp = _class = function (_Component) {
		_inherits(DataFetchingComponent, _Component);

		function DataFetchingComponent(props) {
			_classCallCheck(this, DataFetchingComponent);

			var _this = _possibleConstructorReturn(this, (DataFetchingComponent.__proto__ || Object.getPrototypeOf(DataFetchingComponent)).call(this, props));

			_this.state = {
				data: null
			};
			console.log('extended component');
			return _this;
		}

		_createClass(DataFetchingComponent, [{
			key: 'getData',
			value: function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee() {
					var staticContext, gamesRequest, games;
					return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									staticContext = this.props.staticContext;
									_context.prev = 1;
									_context.next = 4;
									return fetch('http://localhost:5000/getAllGames');

								case 4:
									gamesRequest = _context.sent;
									_context.next = 7;
									return gamesRequest.json();

								case 7:
									games = _context.sent;

									staticContext.appData = games;
									_context.next = 14;
									break;

								case 11:
									_context.prev = 11;
									_context.t0 = _context['catch'](1);

									console.log('error', _context.t0);

								case 14:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, this, [[1, 11]]);
				}));

				function getData() {
					return _ref.apply(this, arguments);
				}

				return getData;
			}()
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(WrappedComponent, _extends({ data: this.state.data }, this.props));
			}
		}]);

		return DataFetchingComponent;
	}(_react.Component), _class.propTypes = {
		endPoint: _propTypes2.default.string.isRequired
	}, _temp;
}

exports.default = dataFetchingComponent;