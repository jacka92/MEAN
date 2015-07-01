var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')
var spursData = require('../spurs/xlsxparse');
var dbPush = require('../native-config');
//var players_names_id = require('../')
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    
var playerSchema = require('../models/spurs');
var mongo = require('mongodb');
    
router.get('/', restrict, function(req, res, next) {
  //Push data to db
  //dbPush.insert();
  //dbPush.addNames();
  
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    //title: 'Personal Statistics',
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null,
    Id: req.user? req.user.Id: null
  };
  console.log(vm.lastName);
  console.log("Player Id:" + vm.Id);
  
  
  res.render('orders/index');
  
});


router.get('/api/players', restrict, function(req, res, next) { ////api/players:PlayerId
  var vm = {
    //title: 'Personal Statistics',
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null,
    Id: req.user? req.user.Id: null
  };
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("test");
      
       collection.find({'Player_Id': vm.Id}).toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});

router.get('/playersId', restrict, function(req, res, next) { ////api/players:PlayerId
  
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

router.get('/players/:playerId', restrict, function(req, res, next) { ////api/players:PlayerId
  /////populate $rootScope variables with measures for particular player
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("test");
      //Return all from playerId collection so as to be rendered in dropdown
       collection.find({'Player_Id': req.params.playerId}).toArray(function(er,docs){ 
        
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});


module.exports = router;


    
    