///Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  hospitalNumber: Number,
  clinicDate: Number,
  DOB: Number,
  phone: Number,
  gender: String,
  address: String,
  email: String,
  drName: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};