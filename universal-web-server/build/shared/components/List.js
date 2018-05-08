'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
  var pokemon = props.pokemon,
      location = props.location;
  var ability = location.match.params.ability;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      ability
    ),
    _react2.default.createElement(
      'ul',
      null,
      pokemon.map(function (poke) {
        var pokemon = poke.pokemon;

        return _react2.default.createElement(
          'li',
          { key: pokemon.name },
          pokemon.name
        );
      })
    )
  );
}