'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tmin-width: 400px;\n\tflex: 1;\n\tmargin: 40px;\n'], ['\n\tmin-width: 400px;\n\tflex: 1;\n\tmargin: 40px;\n']);

exports.default = Card;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardElement = _styledComponents2.default.div(_templateObject);

function Card(props) {
	return _react2.default.createElement(
		CardElement,
		{ className: 'box' },
		_react2.default.createElement(
			'article',
			{ className: 'media' },
			_react2.default.createElement(
				'div',
				{ className: 'media-left' },
				_react2.default.createElement('img', { className: 'image is-128x128', src: 'http://placekitten.com/256/256' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'media-content' },
				_react2.default.createElement(
					'div',
					{ className: 'content' },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'strong',
							null,
							props.name
						),
						_react2.default.createElement('br', null),
						props.description
					)
				)
			)
		)
	);
}

Card.propTypes = {
	name: _propTypes2.default.string.isRequired,
	description: _propTypes2.default.string.isRequired
};