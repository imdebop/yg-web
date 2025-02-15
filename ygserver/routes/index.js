var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
global.kanriDB = require('../app/kanriDB');
const client = require('../app/websockInit')
//const client = require('../app/socketTcp')
//var kanchiList = require('../app/kanchiList');
//var shoList = require('../app/shoList');
//var kumi = require('../app/kumi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sho_kensaku', function(req, res, next) {
  //氏名を検索
  var url_parts = url.parse(req.url,true);
  var owner_search = url_parts.query.owner;

  var delPath = "/home/" + process.env.USER + "/tmp/yg-web/ygserver/app/kanriDB.js"
  delete require.cache[ delPath ];
  kanriDB.kensaku('kanji',owner_search,res)
  
});

router.get('/sho_*', function(req, res, next) {
  var shoList = require('../app/shoList');
  var kumi = require('../app/kumi');

  var url_parts = url.parse(req.url,true);
  console.log(url_parts.path);
  if (/sho_kana/.test(url_parts.path)){
    var owner_search = url_parts.query.kana;
    //kanriDB.kensaku('kana',owner_search,res);
    console.log("shoList.kensaku called")
    shoList.kensaku('kana',owner_search,res);
  }else if(/sho_kanji/.test(url_parts.path)){
    var kanji = url_parts.query.s_kanji;
    //kanriDB.kensaku('kanji',kanji,res);
    shoList.kensaku('kanji',kanji,res);
  }else if(/sho_kumi/.test(url_parts.path)){
    var owner = url_parts.query.owner;
    kumi.get(owner,res);
  }
});


router.get('/content_*', function(req, res, next) {
  
  res.render('content_top');
});

router.get('/panel_juzen', function(req, res, next) {
  var tblYG = require('../app/tbl_yg');
  var arrAza = tblYG.arrAza;
  res.render('panel_juzen',{arrAza: arrAza});
});

//router.get('/panel_iten', function(req, res, next) {
//  var iten = require('../app/iten');
//  iten.process_panel(res, client);
//  //iten.render_panel(res, client);
//});

router.get('/panel_*', function(req, res, next) {
  //console.log(req.url)  
  res.render(req.url.replace("/",""));
});

router.get('/kanchi_list', function(req, res, next) {
  var kanchiList = require('../app/kanchiList');
  //console.log(req.url)
  var url_parts = url.parse(req.url,true);
  var gaiku = url_parts.query.gaiku;
  kanchiList.getByBlock(gaiku,res);

});

router.get('/horyu_list', function(req, res, next) {
  var res_st = res;
  var horyuList = require('../app/horyuList');
  //console.log(req.url);
  var url_parts = url.parse(req.url,true);
  var gaiku = url_parts.query.gaiku;
  horyuList.process(res, client, gaiku);

});

router.get('/juzen_list', function(req, res, next){
  var juzenList = require('../app/juzenList');
  var url_parts = url.parse(req.url,true);
  var azaCd = url_parts.query.azaCd;
  //juzenList.getList(req, client, azaCd);
  juzenList.getList(res, azaCd);
});


router.get('/aaabbb',function(req, res, next){
  var itenInfo = require('../app/itenInfo')
  var url_parts = url.parse(req.url,true);
  var shoCd = url_parts.query.shoCd;
  console.log(shoCd)
  msg = "itenInfo:" + shoCd
  itenInfo.process(res, client, msg);

});


module.exports = router;
