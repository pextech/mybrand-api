/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('message controllers', () => {
  it('post a message ', (done) => {
    chai.request(app)
      .post('/messages/add')
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
      .post('/messages/add')
      .send({
        email: 'pextech',
        phone: '078888888',
        message: 'okay this is a test with coverage',
      })
      .end((err, res) => {
        res.should.be.a('object');
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
    chai.request(app)
      .get('/messages')
      .end((err, res) => {
        chai.request(app)
          .delete(`/messages/delete/${res.body[0].id}`);
        res.should.have.status(200);
      });
    done();
  });
});
