var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var dbPush = require('../native-config');
//var players_names_id = require('../')
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    

var mongo = require('mongodb');
    
router.get('/', restrict, function(req, res, next) {
  //Push data to db
  
  //dbPush.insert();
  
  
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null,
    Id: req.user? req.user.Id: null
  };
  console.log(vm.lastName);
  console.log("Player Id:" + vm.Id);
  
  res.render('players/index');
});


router.get('/playersId', restrict, function(req, res, next) {
  
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("playerId");
      //Return all from playerId collection so as to be rendered in dropdown
       collection.find().toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});

router.get('/playersId/:playerId', restrict, function(req, res, next) {
  
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("playerId");
      //Return all from playerId collection so as to be rendered in dropdown
       collection.find({'Player_Id': req.params.playerId}).toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});

router.get('/players/:playerId', restrict, function(req, res, next) { 
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }
       var collection = db.collection("Full");
       collection.find({'Player_Id': req.params.playerId}).toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
});
});

router.get('/injuries/:playerId', restrict, function(req, res, next) { 
  /////populate $rootScope variables with measures for particular player
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("Injuries");
      //Return all from playerId collection so as to be rendered in dropdown
       collection.find({'Player_Id': req.params.playerId}).toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});




module.exports = router;


    
    