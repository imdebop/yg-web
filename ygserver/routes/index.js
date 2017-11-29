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
  var delPath = "/home/" + process.env.USER + "/tmp/yg-web/ygserver/app/kanriDB.js"
//  console.log( delPath )
//  delete require.cache["/home/kukaku1/tmp/yg-web/ygserver/app/kanriDB.js"];
  delete require.cache[ delPath ];
  var obj = require('../app/kanriDB');
  obj.aaa('dddd');
  res.render('testJade', { title: 'asdfdfdas' });
});


module.exports = router;
