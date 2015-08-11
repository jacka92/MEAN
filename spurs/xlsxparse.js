var XLSX;
if(typeof require !== 'undefined') XLSX = require('xlsx');

var workbook = XLSX.readFile(__dirname + '/injury_insert_full.xlsx');

var worksheet = workbook.Sheets['Sheet1'];

var spursData = XLSX.utils.sheet_to_json(worksheet);

//console.log(spursData);

module.exports = spursData;



