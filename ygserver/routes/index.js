var express = require('express');
var router = express.Router();
var path = require('path');


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
  delete require.cache["/home/kukaku1/tmp/yg-web/ygserver/app/test.js"];
  var obj = require('../app/test');
  res.render('testJade', { title: obj.wkstr });
});


module.exports = router;
