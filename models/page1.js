/////Model (schema)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var page1Schema = new Schema({
  occupation: String
});

var Page1 = mongoose.model('Page1', page1Schema);

module.exports = {
  Page1: Page1
};