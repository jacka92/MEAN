var XLSX;
if(typeof require !== 'undefined') XLSX = require('xlsx');

var workbook = XLSX.readFile(__dirname + '/weekly_measures.xlsx');

var worksheet = workbook.Sheets['Sheet1'];

var spursData = XLSX.utils.sheet_to_json(worksheet);


module.exports = spursData;