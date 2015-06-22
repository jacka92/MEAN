var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var spursService = require('../services/spurs-service');

var spursSchema = new Schema({
  playerName: {type: String},
  sessionDate: {type: String},
  dynamicStressLoad: {type: Number},
  drillStartTime: {type: String},
  drillEndTime: {type: String},
  created: {type: Date, default: Date.now}
});

var Spurs = mongoose.model('Spurs', spursSchema);

module.exports = {
  Spurs: Spurs
};
