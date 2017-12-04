var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var kanriDB = require('../app/kanriDB');


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
  var url_parts = url.parse(req.url,true);
  console.log(url_parts.path);
  if (/sho_kana/.test(url_parts.path)){
    var owner_search = url_parts.query.kana;
    kanriDB.kensaku('kana',owner_search,res)
  }else if(/sho_kumi/.test(url_parts.path)){
    var owner_search = url_parts.query.owner;
    kanriDB.getKumi(owner_search,res)
  }
});


router.get('/content_*', function(req, res, next) {
  
  res.render('content_top');
});

router.get('/panel_*', function(req, res, next) {
  //console.log(req.url)  
  res.render(req.url.replace("/",""));
});

module.exports = router;
