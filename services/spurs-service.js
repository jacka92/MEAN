var Spurs = require('../models/spurs').Spurs;

exports.addSpurs = function(user, next) {
  
    var newSpurs = new Spurs({
     playerName: {type: String},
  sessionDate: {type: String},
  dynamicStressLoad: {type: Number},
  drillStartTime: {type: String},
  drillEndTime: {type: String},
    });
    
    newSpurs.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
  };
