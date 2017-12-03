var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var kanriDB = require('../app/kanriDB');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testJade', function(req, res, next) {
  //  const keys = Object.keys(require.cache);
  //  for (let i = 0; i < keys.length; i++) {
  //    if(/test/.exec(keys[i]) ) {
  //      console.log(keys[i]);
  //    };
  //  };
  var url_parts = url.parse(req.url,true);
  var owner_search = url_parts.query.owner;

  var delPath = "/home/" + process.env.USER + "/tmp/yg-web/ygserver/app/kanriDB.js"
  delete require.cache[ delPath ];
  kanriDB.kensaku(owner_search,res)
  
});

router.get('/content_*', function(req, res, next) {
  
  res.render('content_top');
});

router.get('/panel_*', function(req, res, next) {
  //console.log(req.url)  
  res.render(req.url.replace("/",""));
});

module.exports = router;
