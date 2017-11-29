console.log( "*** test.js reloaded." );
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database("../../kanri.db");

var data;
var h = [];
var sreg = /鈴木/;
db.each("SELECT * from shoyu", function(err, row) {
  name = row.value.split('|')[1];
  if(sreg.test(name)) {
    console.log(name);
    h.push(row);
  }
});


module.exports = {
  aaa: function (s) { console.log(s); }
};

//module.exports.aaa = "metho aaa called"
