/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('Registration block test', () => {
  it('register a user ', (done) => {
    chai.request(app)
      .post('/signUp')
      .field({
        email: 'pextech3333@gmail.com',
        password: 'pextech',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.status(201);
      });
    done();
  });
  it('gives error with incorrect input ', (done) => {
    chai.request(app)
      .post('/signUp')
      .field({
        email: 'pextech3333',
        password: 'pextech',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.status(500);
      });
    done();
  });
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
