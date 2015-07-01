var spursData = require('./spurs/xlsxparse');
var players_names_id = require('./spurs/iD_Parse');
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

exports.addNames = function(){
    MongoClient.connect('mongodb://localhost:27017/rtr', function(err,db){
        if(err) throw err;
        db.collection('playerId').insert(players_names_id, function(err,records){
            if(err) throw err;
        });
    });
};