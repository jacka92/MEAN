var User = require('../models/user').User;

exports.addUser = function(user, next) {
  var newUser = new User({
    name: user.name,
    hospitalNumber: user.hospitalNumber,
    clinicDate: user.clinicDate,
    DOB: user.DOB,
    phone: user.phone,
    gender: user.gender,
    address: user.address,
    email: user.email,
    drName: user.drName,
  });

  newUser.save(function(err) {
    if (err) {
      return next(err);
    }
    next(null);
  });
};