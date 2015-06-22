var spursData = require('./spurs/xlsxparse');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
exports.insert = function(){
    MongoClient.connect('mongodb://localhost:27017/rtr', function(err, db) {
  if (err) throw err;
	db.collection('test').insert(spursData, function(err, records) {
		if (err) throw err;
	});
});

};
