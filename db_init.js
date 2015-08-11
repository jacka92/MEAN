var spursData = require('./spurs/xlsxparse');
var players_names_id = require('./spurs/iD_Parse');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var dbPush = require('../native-config');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    var mongo = require('mongodb');

var XLSX;
if(typeof require !== 'undefined') XLSX = require('xlsx');

var workbook = XLSX.readFile(__dirname + '/full_14_15_daily_loads.xlsx');

var worksheet = workbook.Sheets['Sheet1'];

var spursData = XLSX.utils.sheet_to_json(worksheet);



     MongoClient.connect('mongodb://localhost:27017/rtr', function(err, db) {
        if (err) throw err;
  
    var batch = db.collection('Full').initializeUnorderedBulkOp({useLegacyOps: true});
    
    for(var i=0;i<spursData.length;i++){
        batch.insert(spursData[i]);
    }

    batch.execute(function(err, r) {
        if (err) throw err;
    });

});