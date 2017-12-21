var async = require('async');

console.log( "*** kanriDB.js は開発中のため毎回読み込まれています." );

var tbl_yg = require("../app/tbl_yg");
//console.log(tbl_yg.get_azamei("02"));

var sqlite3 = require('sqlite3');
//var kanDB = require('../app/kanriDB_init');
var h_sho ={};
var h_kumi = {};
var h_juzen = {};
var h_kanchi = {};
var h_kan2kumi = {};
var sho_rows = "sho_rows_ini";

var db = new sqlite3.Database("../../kanri.db");
db.all("SELECT * from shoyu", function(err, rows) {
  //console.log(rows[0]);
  sho_rows = rows;
  rows.forEach(el =>{
    h_sho[el.id] = el.value;
  });

  db.all("SELECT * from kumi", function(err, rows) {
    var sho_code;
    var ren;
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
      ren      = key.slice(4);
      if(!h_kumi[sho_code]){
        h_kumi[ sho_code ] = [ data ];
      }else{
        h_kumi[ sho_code ].push( data );
      }
      let kanchis = data.kanchi.split('|');
      kanchis.forEach(kanCD => {
        h_kan2kumi[kanCD] = sho_code + "|" + ren;
      });
    });
    //console.log(h_kumi);
    //console.log(h_kan2kumi);
    

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

var juCol = { name: 1, kana: 23 };
//var kensakuEdit = require('../app/kensaku_edit');
//var kumiEdit = require("../app/kumi_edit");
//var shoEdit = require('../app/sho_edit');
//var juzenEdit = require('../app/juzen_edit');
//var kanchiEdit = require('../app/kanchi_edit');

module.exports = {
  h_kanchi: h_kanchi,
  h_sho: h_sho,
  sho_rows: function(){
    return sho_rows;
  },

  h_juzen: function(){
    return h_juzen;
  },

  getKumi: function (s, res) {
    //console.log( h_kumi[s] );

    var tblBox = kumiEdit.toTable(s, h_kumi[s], h_juzen, h_kanchi);
    var shoRec = this.getShoyu(s);
    res.render('sho_nayose', { title: '名寄せ一覧', name: shoRec.name, tblBox: tblBox });
    
  },

  getJuzen: function (fude_code) {
    return rec = juzenEdit.get(h_juzen, fude_code);
    //console.log(rec);
  },


};

//module.exports.aaa = "metho aaa called"
