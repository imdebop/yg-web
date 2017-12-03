console.log( "*** kanriDB.js は開発中のため毎回読み込まれています." );

var tbl_yg = require("../app/tbl_yg");
//console.log(tbl_yg.get_azamei("02"));

var sqlite3 = require('sqlite3');
var sho_rows;
var kumi_rows;
var ju_rows;
var kan_rows;

var db = new sqlite3.Database("../../kanri.db");
db.all("SELECT * from shoyu", function(err, rows) {
  sho_rows = rows; 
  console.log(rows[100])
//  for(var i in sho_rows) {
//    name = sho_rows[i].value.split('|')[1];
//    if(sreg.test(name)) {
//      console.log(name);
//      h.push(name);
//    }
//  }
});
db.all("SELECT * from kumi", function(err, rows) {
  kumi_rows = rows; 
});
db.all("SELECT * from juzen", function(err, rows) {
  ju_rows = rows; 
});
db.all("SELECT * from kanchi", function(err, rows) {
  kan_rows = rows; 
});




module.exports = {

  kensaku: function (s,res) {
    var data;
    var h = [];
   console.log(s);
    if (s==''){console.log("検索文字がありません。"); return h;};

    var sreg = new RegExp(s);
//    db.all("SELECT * from shoyu", function(err, rows) {
      for(var i in sho_rows) {
        name = sho_rows[i].value.split('|')[1];
        if(sreg.test(name)) {
          console.log(name);
          h.push(name);
        }
      }
      res.render('testJade', { title: '権利者検索結果', owners: h });
//    });

    
  }

//  kumi_get: function(sho_code, func){
//
//  }
};

//module.exports.aaa = "metho aaa called"
