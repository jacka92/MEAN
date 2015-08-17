var spursData = require('./spurs/xlsxparse');
var players_names_id = require('./spurs/iD_Parse');
var inj = require('./spurs/injuryParse');
var weekly = require('./spurs/weekly_parse');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;


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
    
    var batchWeekly = db.collection('Weekly').initializeUnorderedBulkOp({
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
    
    for (var i=0;i<weekly.length;i++){
        batchWeekly.insert(weekly[i]);
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
    
    batchWeekly.execute(function(err,r){
        if(err) throw err;
    });

});