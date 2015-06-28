var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')
var spursData = require('../spurs/xlsxparse');
var dbPush = require('../native-config');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    
var playerSchema = require('../models/spurs');
var mongo = require('mongodb');
    
router.get('/', restrict, function(req, res, next) {
  //Push data to db
  //dbPush.insert();
  
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    //title: 'Personal Statistics',
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null
  };
  console.log(vm.lastName);
  
  
  res.render('orders/index');
  
});


router.get('/api/players', restrict, function(req, res, next) { //Some alterations needed here: identify by I
  var vm = {
    //title: 'Personal Statistics',
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null
  };
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("test");
      
       collection.find({'Player_Display_Name': vm.lastName}).toArray(function(er,docs){ //collection.find().toArray(function(err, docs){
        //console.log('Error!'); ///Getting called twice here
        if(err) { return console.dir(err); }
        res.json(docs);
      });
      
});
});

router.get('/api/dates', restrict, function(req, res, next) { //Some alterations needed here: identify by I
  var vm = {
    //title: 'Personal Statistics',
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null
  };
   mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("test");
      
       collection.find({'Player_Display_Name': vm.lastName}).toArray(function(er,docs){ //collection.find().toArray(function(err, docs){
        
        if(err) { return console.dir(err); }
        res.send(docs);
      });
      
});
});

module.exports = router;


    
    