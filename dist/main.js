'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Directions = function () {
  function Directions(key) {
    _classCallCheck(this, Directions);

    this.key = key;
    this.url = 'https://maps.googleapis.com/maps/api/directions/json';
  }

  _createClass(Directions, [{
    key: 'query',
    value: function query(parameters) {
      var query = _qs2.default.stringify(_extends({}, parameters, {
        key: this.key
      }));

      return (0, _requestPromise2.default)({
        url: this.url + '?' + query,
        json: true
      });
    }
  }]);

  return Directions;
}();

exports.default = Directions;
;
