'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    value: function query(address) {
      var query = _qs2.default.stringify({
        key: this.key,
        address: address
      });

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
//# sourceMappingURL=main.js.map