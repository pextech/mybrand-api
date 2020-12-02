import mocha from 'mocha';
import assert from 'assert';
import server from '../server';
import chaiHttp from 'chai-http';
import chai from 'chai';

chai.should();
chai.use(chaiHttp);

describe('mybrand api tasks',(done)=>{

    it('starts the server listening to port 3000',()=>{

        chai.request('server')
        .get('api tasks')
        .end((err,response)=>{

            response.should.have.status(200);
            done();

        })
        

    })

})


