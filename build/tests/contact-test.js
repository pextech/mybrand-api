const _chai = _interopRequireDefault(require('chai'));

const _chaiHttp = _interopRequireDefault(require('chai-http'));

const _server = _interopRequireDefault(require('../server'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
_chai.default.use(_chaiHttp.default);

_chai.default.should();

describe('message controllers', () => {
  it('post a message ', (done) => {
    _chai.default.request(_server.default).post('/messages').send({
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
    _chai.default.request(_server.default).post('/messages').send({
      email: 'pextech',
      phone: '078888888',
      message: 'okay this is a test with coverage',
    }).end((err, res) => {
      res.should.have.status(500);
      res.body.should.have.property('error');
      done();
    });
  }); // below tests won't run now as our current endpoint requires to be authenticated.

  xit('Get all messages', (done) => {
    _chai.default.request(_server.default).get('/messages').end((err, res) => {
      res.should.have.status(200);
      res.should.be.a('object');
    });

    done();
  });
  xit('delete message by id', (done) => {
    const id = '5fd1d6b9c92fb373b2e6abd5';

    _chai.default.request(_server.default).delete('/messages/'.concat(id)).end((err, res) => {
      res.should.have.status(200);
    });

    done();
  });
});
