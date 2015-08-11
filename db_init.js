var spursData = require('./spurs/xlsxparse');
var players_names_id = require('./spurs/iD_Parse');
var inj = require('./spurs/injuryParse');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

var XLSX;
if (typeof require !== 'undefined') XLSX = require('xlsx');

var workbook = XLSX.readFile(__dirname + '/full_14_15_daily_loads.xlsx');

var worksheet = workbook.Sheets['Sheet1'];

var spursData = XLSX.utils.sheet_to_json(worksheet);

MongoClient.connect('mongodb://localhost:27017/rtr', function(err, db) {
    if (err) throw err;

    var batchStats = db.collection('Full').initializeUnorderedBulkOp({
        useLegacyOps: true
    });
    
    var batchNames = db.collection('playerId').initializeUnorderedBulkOp({
        useLegacyOps: true
    });
    
    var batchInjuries = db.collection('Injuries').initializeUnorderedBulkOp({
        useLegacyOps: true
    });

    for (var i = 0; i < spursData.length; i++) {
        batchStats.insert(spursData[i]);
    }
    
    for (var i = 0; i < players_names_id.length; i++) {
        batchNames.insert(players_names_id[i]);
    }
    
    for (var i = 0; i < inj.length; i++) {
        batchInjuries.insert(inj[i]);
    }

    batchStats.execute(function(err, r) {
        if (err) throw err;
    });
    
     batchNames.execute(function(err, r) {
        if (err) throw err;
    });
     
      batchInjuries.execute(function(err, r) {
        if (err) throw err;
    });

});