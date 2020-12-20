/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

const testPost = {
  Title: 'this is awesome',
  Description: 'bla bla bla bla',
};

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
      .delete(`/blog/${id}`)
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
          .delete(`/blog/${res.body[0]._id}`);
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
          .get(`blog/${res.body[0]._id}`);
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
          .get(`blog/${res.body[0]._id}`);
        expect(res.body).to.have.property('message');
        res.should.have.status(500);
      });
    done();
  });

  it('should create post', () => {
    const res = chai
      .request(app)
      .post('/blog')
      .field('title', testPost.Title)
      .field('Description', testPost.Description);
    res.should.be.a('object');
  });
});
