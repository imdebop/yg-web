var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var kanriDB = require('../app/kanriDB');
const client = require('../app/socketTcp')
//var kanchiList = require('../app/kanchiList');
//var shoList = require('../app/shoList');

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

router.get('/panel_horyu', function(req, res, next) {
  console.log("horyu message sent")
  //socket.emit("message", 'send message.');
  res.render(req.url.replace("/",""));
});

router.get('/panel_*', function(req, res, next) {
  //console.log(req.url)  
  res.render(req.url.replace("/",""));
});

router.get('/kanchi_list', function(req, res, next) {
  var kanchiList = require('../app/kanchiList');
  //console.log(req.url);
  var url_parts = url.parse(req.url,true);
  var gaiku = url_parts.query.gaiku;
  //console.log(gaiku); 
  kanchiList.getByBlock(gaiku,res);
  //kanriDB.kanchisByBlock(gaiku,res);

});

module.exports = router;
