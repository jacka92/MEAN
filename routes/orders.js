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
    title: 'Personal Statistics',
    lastName: req.user? req.user.lastName: null
  };
  console.log(vm.lastName);
  
  mongo.connect("mongodb://localhost:27017/rtr", function(err, db){
       if(err) { return console.dir(err); }

       var collection = db.collection("test");
  
      collection.find({'Player_Display_Name': vm.lastName}).each(function(err,docs){
        if(err) { return console.dir(err); }
        
        res.render('orders/index',{resultfind : docs});
      });
 
  console.log('lastname: ' + vm.lastName);
});
});

module.exports = router;


    
    