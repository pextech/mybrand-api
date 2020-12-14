/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('message controllers', () => {
  it('logs in a user ', (done) => {
    chai.request(app)
      .post('/login')
      .field({
        email: 'Mcstain1639@gmail.com',
        password: 'Mc1639_1639',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.status(200);
      });
    done();
  });
  it('should have status 200 ', (done) => {
    chai.request(app)
      .post('/login')
      .field({
        email: 'Mcstain1639@gmail.com',
        password: 'Mc1639_1639',
      })
      .end((err, res) => {
        res.body.should.have.status(200);
      });
    done();
  });
  it('should give error with incorrect input ', (done) => {
    chai.request(app)
      .post('/login')
      .field({
        email: 'Mcstain1639',
        password: 'Mc1639_1639',
      })
      .end((err, res) => {
        res.body.should.have.property('message');
        res.body.should.have.status(500);
      });
    done();
  });
});
