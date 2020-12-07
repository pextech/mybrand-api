/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'request';
import {} from 'dotenv/config';
import { Server } from 'http';
import mongoose from 'mongoose';
import app from '../server';
import Contact from '../models/contactModel';
import contactPost from '../controllers/contactController';

chai.use(chaiHttp);
const { expect } = chai;

const should = chai.should();

describe('testing posting a contact review', () => {
  it('post contact review', (done) => {
    chai.request(app)
      .post('/')
      .send({
        name: ' pextech ',
        email: 'pextech@gmail.com',
        phone: '078888888',
        message: 'okay this is a test with coverage for object check',
      })
      .end((err, res) => {
        res.body.should.be.a('object');
      });
    done();
  });

  // eslint-disable-next-line no-undef
  it('should have a status of 201', (done) => {
    chai.request(app)
      .post('/')
      .send({
        name: ' pextech ',
        email: 'pextech@gmail.com',
        phone: '078888888',
        message: 'okay this is a test with coverage for status check',
      })
      .end((err, res) => {
        res.should.have.status(201);
      });
    done();
  });

  // eslint-disable-next-line no-undef
  it('should returns a status of 404 for invalid page', (done) => {
    chai.request(app)
      .post('/about')
      .end((err, res) => {
        res.should.have.status(404);
      });
    done();
  });
});
