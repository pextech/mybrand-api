/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('subscribe controllers', () => {
  it('subscribes a user ', (done) => {
    chai.request(app)
      .post('/subscribe')
      .send({
        email: 'belse@gmail.com',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
      });
    done();
  });

  it('provides error with incorrect input', (done) => {
    chai.request(app)
      .post('/subscribe')
      .send({
        email: 'pextech',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error');
      });
    done();
  });

  // below tests won't run now as our current endpoint requires to be authenticated.

  it('Get all Subscribers', (done) => {
    chai.request(app)
      .get('/subscribe/get')
      .end((err, res) => {
        res.should.be.a('object');
      });
    done();
  });

  it('cant delete subscriber by wrong id', (done) => {
    const id = '5fd1d6b9c92fb373b2e6abd5';
    chai.request(app)
      .delete(`/subscribe/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(500);
      });
    done();
  });
});
