console.log( "*** test.js reloaded." );
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database("../../kanri.db");


//db.each("SELECT * from shoyu limit 3", function(err, row) {
//      console.log(row);
//});



//exports.wkstr = "hea=r";
//exports.mmm = "aa000000000000000000a";

module.exports = {
  aaa: function (s) { console.log(s); }
};

//module.exports.aaa = "metho aaa called"
