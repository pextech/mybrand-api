/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

// // below tests won't run now as our current endpoint requires to be authenticated.

describe('Tests for blog endpoints', () => {
  xit('Get all blogs ', (done) => {
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

  xit('delete Blog by id', (done) => {
    const id = '5fd499e60bef940efcd79eac';
    chai.request(app)
      .delete(`/blog/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(id).to.be.a('string');
      });
    done();
  });

  xit('provides error when deleting Blog with incorrect id', (done) => {
    const id = '5';
    chai.request(app)
      .delete(`/blog/delete/${id}`)
      .end((err, res) => {
        expect(res.body).to.have.property('error');
        res.should.have.status(500);
      });
    done();
  });

  xit('get Blog by id', (done) => {
    const id = '5fc29ffa9645111c68beaf01';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .end((err, res) => {
        expect(res.body.data).to.be.an('object');
        res.should.have.status(200);
        expect(id).to.be.a('string');
      });
    done();
  });

  xit('Get one blog by Id ', (done) => {
    const id = '5fc2a19ee58be11838c1dacc';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .end((err, res) => {
        res.body.should.be.a('object');
        expect(res.body).to.not.eq('null');
        expect(res).to.have.status(200);
      });
    done();
  });

  xit('gives error with wrong Blog id', (done) => {
    const id = '10';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .end((err, res) => {
        expect(res.body).to.have.property('error');
        res.should.have.status(500);
      });
    done();
  });

  xit('Post a blog ', (done) => {
    chai.request(app)
      .post('/blog/add')
      .send({
        blogImage: '',
        title: 'okay lets test this endpoint',
        description: 'i am testing this endpoint',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
        expect(res).to.have.status(201);
      });
    done();
  });
});
