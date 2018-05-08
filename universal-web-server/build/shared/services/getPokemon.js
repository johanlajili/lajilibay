'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPokemon = {
  withAbility: function withAbility(ability) {
    console.log('ability', ability);
    var baseUrl = 'http://pokeapi.co/api/v2/ability';
    return _axios2.default.get(baseUrl + '/' + ability);
  }
};

exports.default = getPokemon;