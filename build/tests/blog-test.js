function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

const _chai = _interopRequireWildcard(require('chai'));

const _chaiHttp = _interopRequireDefault(require('chai-http'));

const _server = _interopRequireDefault(require('../server'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== 'function') return null; const cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-underscore-dangle */

/* eslint-disable import/no-extraneous-dependencies */
_chai.default.use(_chaiHttp.default);

_chai.default.should(); // // below tests won't run now as our current endpoint requires to be authenticated.

describe('Tests for blog endpoints', () => {
  it('Get all blogs ', (done) => {
    // const id = '5fd499e60bef940efcd79eac';
    _chai.default.request(_server.default).get('/blog/').end((err, res) => {
      (0, _chai.expect)(res.status).to.equals(200);
      (0, _chai.expect)(res.body.message).to.be.a('string');
      (0, _chai.expect)(res.body.data).to.be.an('array');
    });

    done();
  });
  it('delete Blog by id', (done) => {
    const id = '5fdb9f9081c3811c8866ee94';

    _chai.default.request(_server.default).delete('/blog/delete/'.concat(id)).end((err, res) => {
      res.should.have.status(500);
      (0, _chai.expect)(id).to.be.a('string');
    });

    done();
  });
  it('provides error when deleting Blog with incorrect id', (done) => {
    _chai.default.request(_server.default).get('/blog/').end((err, res) => {
      _chai.default.request(_server.default).delete('/blog/delete/'.concat(res.body[0]._id));

      (0, _chai.expect)(res.body).to.have.property('message');
      res.should.have.status(500);
    });

    done();
  });
  it('get Blog by id', (done) => {
    _chai.default.request(_server.default).get('/blog').end((err, res) => {
      _chai.default.request(_server.default).get('blog/get/'.concat(res.body[0]._id));

      (0, _chai.expect)(res.body).to.be.an('object');
      res.should.have.status(200);
      (0, _chai.expect)(res.body[0]._id).to.be.a('string');
    });

    done();
  });
  it('gives error with wrong Blog id', (done) => {
    _chai.default.request(_server.default).get('/blog/').end((err, res) => {
      _chai.default.request(_server.default).get('blog/get/'.concat(res.body[0]._id));

      (0, _chai.expect)(res.body).to.have.property('message');
      res.should.have.status(500);
    });

    done();
  });
  it('Post a blog ', (done) => {
    _chai.default.request(_server.default).post('/blog/add').send({
      imageUrl: '',
      imageId: '',
      title: 'okay lets test this endpoint',
      description: 'i am testing this endpoint',
    }).end((err, res) => {
      res.body.should.be.a('object');
      (0, _chai.expect)(res).to.have.status(500);
    });

    done();
  });
});
