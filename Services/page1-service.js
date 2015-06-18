var Page1 = require('../models/page1').Page1;

exports.addPage1 = function(input, next) {
  var newPage1 = new Page1({
    occupation : input.occupation
  });

  newPage1.save(function(err) {
    if (err) {
      return next(err);
    }
    next(null);
  });
};