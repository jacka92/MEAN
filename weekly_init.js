var weekly = require('./spurs/weekly_parse');

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

MongoClient.connect('mongodb://localhost:27017/rtr', function(err, db) {
    if (err) throw err;

    var batchWeekly = db.collection('Weekly').initializeUnorderedBulkOp({
        useLegacyOps: true
    });

    for (var i = 0; i < weekly.length; i++) {
        batchWeekly.insert(weekly[i]);
    }

      batchWeekly.execute(function(err, r) {
        
    });

});