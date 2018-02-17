var async = require('async');
var yaml = require('js-yaml');
var fs = require('fs');
var db = require('../app/kanriDB');

var doc = yaml.safeLoad(fs.readFileSync('app/kanri_tbl.yaml'));

var test = function(){
    var kanCol = doc.kanchi;
    console.log(kanCol);
    let keys = Object.keys(db.h_kanchi);

    console.log(keys.length);
    let data = db.h_kanchi["2000100"];
    console.log(data);
}

setTimeout( test, 50);