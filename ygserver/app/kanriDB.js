console.log( "*** kanriDB.js は開発中のため毎回読み込まれています." );

var tbl_yg = require("../app/tbl_yg");
//console.log(tbl_yg.get_azamei("02"));

var sqlite3 = require('sqlite3');
var kanDB = require('../app/kanriDB_init');
var sho_rows;
var h_kumi = {};
var h_juzen = {};
var h_kanchi = {};

var db = new sqlite3.Database("../../kanri.db");
db.all("SELECT * from shoyu", function(err, rows) {
  sho_rows = rows; 

  db.all("SELECT * from kumi", function(err, rows) {
    var sho_code;
    var wkKeys = [];
    var wk_h = {};
    rows.forEach(el =>{
      wkKeys.push(el.id);
      wk_h[el.id] = el;
      });
    var sortKeys = wkKeys.sort();
    var data;
    sortKeys.forEach(key =>  {
      data = wk_h[key];
      sho_code = key.slice(0,4);
      if(!h_kumi[sho_code]){
        h_kumi[ sho_code ] = [ data ];
      }else{
        h_kumi[ sho_code ].push( data );
      }
    });
    //console.log(h_kumi);


    db.all("SELECT * from juzen", function(err, rows) {
      rows.forEach(el =>  {
        h_juzen[ el.id ] = el.value;
      });
      //console.log(h_juzen);
       
      db.all("SELECT * from kanchi", function(err, rows) {
        rows.forEach(el =>  {
          h_kanchi[ el.id ] = el.value;
        });
        //console.log(h_kanchi);
  
      });
    });
  });
});


var juCol = { name: 1, kana: 23
};
var kensakuEdit = require('../app/kensaku_edit');

module.exports = {

  kensaku: function (kubun,s,res) {
    var data;
    var h = [];
   console.log(s);
    if (s==''){console.log("検索文字がありません。"); return h;};

    var sreg = new RegExp(s);
    var lookCol = juCol.name;
    if (kubun == "kana"){
      lookCol = juCol.kana;
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
          //console.log(name);
          h.push({name: name, sho_code:sho_code});
        }
      }
      var tbl = kensakuEdit.toTable(h)

      res.render('sho_kensaku_res', { title: '権利者検索結果', owners: h, tbl: tbl });
  },

  getShoyu: function (sho_code) {
    console.log("getShoyu called")
  },

  getKumi: function (s, res) {
    console.log( h_kumi[s] );
    this.getShoyu(s);
    res.render('sho_nayose', { title: '名寄せ一覧' });
    
  }


};

//module.exports.aaa = "metho aaa called"
