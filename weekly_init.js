var data = require('./spurs/weekly_parse');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;


MongoClient.connect('mongodb://localhost:27017/rtr', function(err, db) {
    if (err) throw err;
    
    var batchData = db.collection('Weekly').initializeUnorderedBulkOp({
        useLegacyOps: true
    });

    
    for (var i = 0; i < data.length; i++) {
        batchData.insert(data[i]);
    }

      batchData.execute(function(err, r) {
        if (err) throw err;
    });

});