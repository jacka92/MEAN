var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
  firstName: {type: String, required: 'Please enter your first name'},
  lastName: {type: String, required: 'Please enter your last name'},
  email: {type: String, required: 'Please enter your email'},
  Id: {type: String, required: 'Please enter your Id'},
  password: {type: String, required: 'Please enter your password', min:[10, 'Please use a longer password']},
  created: {type: Date, default: Date.now}
});

userSchema.path('email').validate(function(value, next) {
  userService.findUser(value, function(err, user) {
    if (err) {
      console.log(err + "Error executes");
      return next(false);
    }
    next(!user);
  });
},  'That email is already in use !!!');

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};