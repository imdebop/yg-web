console.log( "*** kanriDB.js は開発中のため毎回読み込まれています." );

var tbl_yg = require("../app/tbl_yg");
//console.log(tbl_yg.get_azamei("02"));

var sqlite3 = require('sqlite3');
var kanDB = require('../app/kanriDB_init');
var sho_rows;
var kumi_rows;
var ju_rows;
var kan_rows;

var db = new sqlite3.Database("../../kanri.db");
db.all("SELECT * from shoyu", function(err, rows) {
  sho_rows = rows; 
  db.all("SELECT * from kumi", function(err, rows) {
    kumi_rows = rows; 
    db.all("SELECT * from juzen", function(err, rows) {
      ju_rows = rows; 
      db.all("SELECT * from kanchi", function(err, rows) {
        kan_rows = rows; 
      });
    });
  });
});



module.exports = {

  kensaku: function (kubun,s,res) {
    var data;
    var h = [];
   console.log(s);
    if (s==''){console.log("検索文字がありません。"); return h;};

    var sreg = new RegExp(s);
    var lookCol = 1;
    if (kubun == "kana"){
      lookCol = 23;
    }
    var tStr;
    var name;
    var wkRow;
    var sho_code;
    for(var i in sho_rows) {
      var wkArr;
      wkRow = sho_rows[i];
        tStr = wkRow.value.split('|')[lookCol];
        if(sreg.test(tStr)) {
          wkArr = wkRow.value.split('|');
          name = wkArr[1];
          sho_code = wkArr[0];
          console.log(name);
          h.push(`${name}(${sho_code})`);
        }
      }
      res.render('testJade', { title: '権利者検索結果', owners: h });
  },

  juBySho: function (sho_code,res) {
  }
};

//module.exports.aaa = "metho aaa called"
