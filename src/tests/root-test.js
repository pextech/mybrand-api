import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'request';
import server from '../../server';
import {} from 'dotenv/config';

chai.use(chaiHttp);
const { expect } = chai;

const should = chai.should();

it('has a status of 200', (done) => {
  chai.request(server).keepOpen()
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
});
it('page content display', (done) => {
  request('http://localhost:3000', (err, res, body) => {
    expect(body).to.a('string');
    done();
  });
});

it('listening on port', (done) => {
  request('http://localhost:3000', (err, res, body) => {
    expect(body).to.a('string');
    done();
  });
});
