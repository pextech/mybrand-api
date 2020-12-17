/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

// // below tests won't run now as our current endpoint requires to be authenticated.

describe('Tests for blog endpoints', () => {
  it('Get all blogs ', (done) => {
    // const id = '5fd499e60bef940efcd79eac';
    chai.request(app)
      .get('/blog/')
      .end((err, res) => {
        expect(res.status).to.equals(200);
        expect(res.body.message).to.be.a('string');
        expect(res.body.data).to.be.an('array');
      });
    done();
  });

  it('delete Blog by id', (done) => {
    const id = '5fdb9f9081c3811c8866ee94';
    chai.request(app)
      .delete(`/blog/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(500);
        expect(id).to.be.a('string');
      });
    done();
  });

  it('provides error when deleting Blog with incorrect id', (done) => {
    chai.request(app)
      .get('/blog/')
      .end((err, res) => {
        chai.request(app)
          .delete(`/blog/delete/${res.body[0]._id}`);
        expect(res.body).to.have.property('message');
        res.should.have.status(500);
      });
    done();
  });

  it('get Blog by id', (done) => {
    chai.request(app)
      .get('/blog')
      .end((err, res) => {
        chai.request(app)
          .get(`blog/get/${res.body[0]._id}`);
        expect(res.body).to.be.an('object');
        res.should.have.status(200);
        expect(res.body[0]._id).to.be.a('string');
      });
    done();
  });

  it('gives error with wrong Blog id', (done) => {
    chai.request(app)
      .get('/blog/')
      .end((err, res) => {
        chai.request(app)
          .get(`blog/get/${res.body[0]._id}`);
        expect(res.body).to.have.property('message');
        res.should.have.status(500);
      });
    done();
  });

  it('Post a blog ', (done) => {
    chai.request(app)
      .post('/blog/add')
      .send({
        imageUrl: '',
        imageId: '',
        title: 'okay lets test this endpoint',
        description: 'i am testing this endpoint',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        expect(res).to.have.status(500);
      });
    done();
  });
});
