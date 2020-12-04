import mocha from 'mocha';
import chai from 'chai';
import app from '../server';
import chaiHttp from 'chai-http';
const assert = chai.assert;

describe('mybrand api tasks',(done)=>{

    it('should save without error ',()=>{

   const contact = {

                name : 'mupenzi cedrick',
                email : 'mcstain1639@gmail.com',
                phone : '078012252',
                message :'this is a test function'
        
            }

        chai.request(chaiHttp).keepOpen()
        .post('/')
        .send(contact)
        .end( function(err, res){


                res.should.have.status(201);

                done();

            })

   

       

        })
        

    })



