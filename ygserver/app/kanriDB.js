console.log( "*** kanriDB.js は開発中のため毎回読み込まれています." );
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database("../../kanri.db");


module.exports = {
  kensaku: function (s) {
    var data;
    var h = [];
   console.log(s)
    if (s==''){console.log("検索文字がありません。"); return h;}

    var sreg = new RegExp(s);
    db.each("SELECT * from shoyu", function(err, row) {
      name = row.value.split('|')[1];
      if(sreg.test(name)) {
        console.log(name);
        h.push(name);
        console.log(h)
       
      };
    });
    return h;
    
  }
};

//module.exports.aaa = "metho aaa called"
