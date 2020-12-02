'use strict';

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should();
_chai2.default.use(_chaiHttp2.default);

describe('mybrand api tasks', function () {

        it('starts the server listening to port 3000', function () {

                _chai2.default.request('server').get('api tasks').end(function (err, response) {

                        response.should.have.status(200);
                        done();
                });
        });
});