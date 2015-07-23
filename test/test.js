var app = require('../app'); 
var supertest = require('supertest');
var should  = require('should');

describe('http routing test suite: ', function(){
    
    it('should return player IDs', function(done){
        
        supertest(app).get('/players/playersId').expect(302).end(function(err, res){
            res.status.should.equal(302);
            done();
        });
    });
    
    it('Should return GPS statistics of the player with the specified ID', function(done){
        supertest(app).get('/players/392')
        .expect('Content-Type', /json/)
        .expect(302)
        .end(function(err,res){
            res.status.should.equal(302);
            done();
        });
    });
    
    it('Should return the registration view.', function(done){
        supertest(app).get('/users/create')
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    });
    
});
