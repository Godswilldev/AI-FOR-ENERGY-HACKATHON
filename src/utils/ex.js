// Run this file in the terminal with node ex.js

const node_xj = require("xls-to-json");
node_xj(
  {
    input: "../data/teamstarkfinaldata.xlsx", // input xls
    output: "output.json", // output json
    sheet: "Sheet1", // specific sheetname
    rowsToSkip: 0, // number of rows to skip at the top of the sheet; defaults to 0
    allowEmptyKey: false, // avoids empty keys in the output, example: {"": "something"}; default: true
  },
  function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  }
);
