var async = require('async');
var yaml = require('js-yaml');
var fs = require('fs');
//var db = require('../app/kanriDB');

var doc = yaml.safeLoad(fs.readFileSync('app/kanri_tbl.yaml'));

var test = function(){
    var kanCol = doc.kanchi;
    //console.log(kanCol);
    let keys = Object.keys(db.h_kanchi);

    module.exports.initTbl("kanchi");
    module.exports.setCD("2000100");
    console.log(colTbl);
    console.log(module.exports.get.shoCd);
}

var h_kanchi;

var colTbl;
var initTbl = function(tblName){
    colTbl = doc[tblName];
}

var get = {};
var arrData;
var setCD = function(cd){
    let data = kanriDB.h_kanchi[cd];
    arrData = data.split("|");
    let colKeys = Object.keys(colTbl);
    let colSize = colKeys.length;
    for(let i=0;i<colSize;i++){
        get[colKeys[i]] = arrData[i+1];
    }

    console.log(data);

}

var getAr = function(cname, n){
    let col = colTbl[cname];
    let resA = arrData.slice(col, col+n);
    return resA;
}

module.exports = {
    //db: db,
    initTbl: initTbl,
    setCD: setCD,
    get: get,
    getAr: getAr,
    //test: function(){
    //    setTimeout(test, 500);
    //}(),
    //getH_kanci: kanriDB.h_kanchi,
    h_kanchi: h_kanchi


}
