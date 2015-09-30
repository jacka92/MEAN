var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    
var mongo = require('mongodb');
    
router.get('/', restrict, function(req, res, next) {
  
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    firstName: req.user? req.user.firstName: null,
    lastName: req.user? req.user.lastName: null,
  };
  res.render('dashboard/index');
});


module.exports = router;


    
    