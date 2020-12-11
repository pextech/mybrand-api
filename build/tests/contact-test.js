const _chai = _interopRequireDefault(require('chai'));

const _chaiHttp = _interopRequireDefault(require('chai-http'));

const _request = _interopRequireDefault(require('request'));

require('dotenv/config');

const _http = require('http');

const _mongoose = _interopRequireDefault(require('mongoose'));

const _server = _interopRequireDefault(require('../server'));

const _contactModel = _interopRequireDefault(require('../models/contactModel'));

const _contactController = _interopRequireDefault(require('../controllers/contactController'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
_chai.default.use(_chaiHttp.default);

const { expect } = _chai.default;

const should = _chai.default.should();

describe('testing posting a contact review', () => {
  it('post contact review', (done) => {
    _chai.default.request(_server.default).post('/').send({
      name: ' pextech ',
      email: 'pextech@gmail.com',
      phone: '078888888',
      message: 'okay this is a test with coverage for object check',
    }).end((err, res) => {
      res.body.should.be.a('object');
    });

    done();
  }); // eslint-disable-next-line no-undef

  it('should have a status of 201', (done) => {
    _chai.default.request(_server.default).post('/').send({
      name: ' pextech ',
      email: 'pextech@gmail.com',
      phone: '078888888',
      message: 'okay this is a test with coverage for status check',
    }).end((err, res) => {
      res.should.have.status(201);
    });

    done();
  }); // eslint-disable-next-line no-undef

  it('should returns a status of 404 for invalid page', (done) => {
    _chai.default.request(_server.default).post('/about').end((err, res) => {
      res.should.have.status(404);
    });

    done();
  });
});
