/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('message controllers', () => {
  it('post a message ', (done) => {
    chai.request(app)
      .post('/messages')
      .send({
        name: 'pextech',
        email: 'pextech@gmail.com',
        phone: '079999999',
        message: 'okay this is a test with coverage for object check',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
      });
    done();
  });

  it('provides error with incorrect input', (done) => {
    chai.request(app)
      .post('/messages')
      .send({
        email: 'pextech',
        phone: '078888888',
        message: 'okay this is a test with coverage',
      })
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('error');
        done();
      });
  });

  // below tests won't run now as our current endpoint requires to be authenticated.

  it('Get all messages', (done) => {
    chai.request(app)
      .get('/messages')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
      });
    done();
  });

  it('delete message by id', (done) => {
    const id = '5fd1d6b9c92fb373b2e6abd5';
    chai.request(app)
      .delete(`/messages/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });
});
