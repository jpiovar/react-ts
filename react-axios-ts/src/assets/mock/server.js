var tableData = require("./table-data.json");
var metaData = require("./meta-data.json");
var tutorialsData = require("./tutorials.json");

module.exports = () => ({
  'table-data': tableData,
  'meta-data': metaData,
  tutorials: tutorialsData
});
