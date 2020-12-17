/* eslint-disable import/no-extraneous-dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server';
import {} from '@babel/polyfill';

chai.use(chaiHttp);
chai.should();
const token = jwt.sign({

  email: 'mcstain1639@gmail.com',
  password: 'Mc1639_1639',

},
process.env.TOKEN,
{ expiresIn: '1hr' });

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
    const id = '5fdb8c5f43644014e8bd2375';
    chai.request(app)
      .delete(`/blog/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(id).to.be.a('string');
      });
    done();
  });

  it('provides error when deleting Blog with incorrect id', (done) => {
    const id = '5';
    chai.request(app)
      .delete(`/blog/delete/${id}`)
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body).to.have.property('Auth failed');
        res.should.have.status(500);
      });
    done();
  });

  it('get Blog by id', (done) => {
    const id = '5fc29ffa9645111c68beaf01';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.data).to.be.an('object');
        res.should.have.status(200);
        expect(id).to.be.a('string');
      });
    done();
  });

  it('Get one blog by Id ', (done) => {
    const id = '5fc2a19ee58be11838c1dacc';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.be.a('object');
        expect(res.body).to.not.eq('null');
        expect(res).to.have.status(200);
      });
    done();
  });

  it('gives error with wrong Blog id', (done) => {
    const id = '10';
    chai.request(app)
      .get(`/blog/get/${id}`)
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body).to.have.property('error');
        res.should.have.status(500);
      });
    done();
  });

  it('Post a blog ', (done) => {
    chai.request(app)
      .post('/blog/add')
      .set('Authorization', token)
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
