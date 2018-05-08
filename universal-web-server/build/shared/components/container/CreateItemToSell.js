'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateItemToSell = function (_Component) {
	_inherits(CreateItemToSell, _Component);

	function CreateItemToSell() {
		_classCallCheck(this, CreateItemToSell);

		var _this = _possibleConstructorReturn(this, (CreateItemToSell.__proto__ || Object.getPrototypeOf(CreateItemToSell)).call(this));

		_this.state = {
			name: '',
			description: '',
			categories: [],
			originalPrice: 0
		};

		_this.onChangeName = _this.onChangeName.bind(_this);
		_this.onChangeDescription = _this.onChangeDescription.bind(_this);
		_this.onChangeCategories = _this.onChangeCategories.bind(_this);
		_this.onChangeOriginalPrice = _this.onChangeOriginalPrice.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);

		return _this;
	}

	_createClass(CreateItemToSell, [{
		key: 'onChangeName',
		value: function onChangeName(event) {
			this.setState({
				name: event.target.value
			});
		}
	}, {
		key: 'onChangeDescription',
		value: function onChangeDescription(event) {
			this.setState({
				description: event.target.value
			});
		}
	}, {
		key: 'onChangeCategories',
		value: function onChangeCategories(event) {
			this.setState({
				categories: event.target.value.split(',')
			});
		}
	}, {
		key: 'onChangeOriginalPrice',
		value: function onChangeOriginalPrice(event) {
			this.setState({
				originalPrice: Number(event.target.value)
			});
		}
	}, {
		key: 'onSubmit',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee(event) {
				return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								if (!(this.state.name && this.state.description)) {
									_context.next = 10;
									break;
								}

								_context.prev = 2;
								_context.next = 5;
								return (0, _crossFetch2.default)('http://localhost:3000/itemtosell/create', {
									method: 'POST',
									body: JSON.stringify(this.state),
									headers: {
										'Content-Type': 'application/json'
									}
								});

							case 5:
								this.setState({
									name: '',
									description: '',
									categories: [],
									originalPrice: 0
								});
								_context.next = 10;
								break;

							case 8:
								_context.prev = 8;
								_context.t0 = _context['catch'](2);

							case 10:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[2, 8]]);
			}));

			function onSubmit(_x) {
				return _ref.apply(this, arguments);
			}

			return onSubmit;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'section' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.onSubmit },
					_react2.default.createElement(
						'div',
						{ className: 'field' },
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Name'
						),
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement('input', { className: 'input', type: 'text', value: this.state.name, onChange: this.onChangeName, placeholder: 'Nintendo 64' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'field' },
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Description'
						),
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement('textarea', { className: 'textarea', value: this.state.description, onChange: this.onChangeDescription, placeholder: 'It\'s a great console' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'field' },
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Categories'
						),
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement('input', { className: 'input', value: this.state.categories.join(','), onChange: this.onChangeCategories, type: 'text', placeholder: 'gaming, nerd' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'field' },
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Original Price'
						),
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement('input', { className: 'input', value: this.state.originalPrice, onChange: this.onChangeOriginalPrice, type: 'number', placeholder: '42' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'field is-grouped' },
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement('input', { type: 'submit', className: 'button is-link', value: 'submit' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'control' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/admin', className: 'button is-text' },
								'Cancel'
							)
						)
					)
				)
			);
		}
	}]);

	return CreateItemToSell;
}(_react.Component);

CreateItemToSell.propTypes = {
	data: _propTypes2.default.string
};
exports.default = CreateItemToSell;