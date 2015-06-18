var XLSX;
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('./spurs/test_spurs_data.xlsx');


var worksheet = workbook.Sheets['Sheet1'];

console.log(XLSX.utils.sheet_to_json(worksheet));