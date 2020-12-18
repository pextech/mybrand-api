const _chai = _interopRequireDefault(require('chai'));

const _chaiHttp = _interopRequireDefault(require('chai-http'));

const _server = _interopRequireDefault(require('../server'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

/* eslint-disable import/no-extraneous-dependencies */
_chai.default.use(_chaiHttp.default);

_chai.default.should();

describe('message controllers', () => {
  it('post a message ', (done) => {
    _chai.default.request(_server.default).post('/messages/add').send({
      name: 'pextech',
      email: 'pextech@gmail.com',
      phone: '079999999',
      message: 'okay this is a test with coverage for object check',
    }).end((err, res) => {
      res.body.should.be.a('object');
    });

    done();
  });
  it('provides error with incorrect input', (done) => {
    _chai.default.request(_server.default).post('/messages/add').send({
      email: 'pextech',
      phone: '078888888',
      message: 'okay this is a test with coverage',
    }).end((err, res) => {
      res.should.be.a('object');
      done();
    });
  }); // below tests won't run now as our current endpoint requires to be authenticated.

  it('Get all messages', (done) => {
    _chai.default.request(_server.default).get('/messages').end((err, res) => {
      res.should.have.status(200);
      res.should.be.a('object');
    });

    done();
  });
  it('delete message by id', (done) => {
    _chai.default.request(_server.default).get('/messages').end((err, res) => {
      _chai.default.request(_server.default).delete('/messages/delete/'.concat(res.body[0].id));

      res.should.have.status(200);
    });

    done();
  });
});
