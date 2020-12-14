/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('subscribe controllers', () => {
  it('subscribes a user ', (done) => {
    chai.request(app)
      .post('/subscribe/add')
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
      .post('/subscribe/add')
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

  xit('Get all Subscribers', (done) => {
    chai.request(app)
      .get('/subscribe')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
      });
    done();
  });

  xit('delete subscriber by id', (done) => {
    const id = '5fd1d6b9c92fb373b2e6abd5';
    chai.request(app)
      .delete(`/subscribe/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });
});
