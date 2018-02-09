var kanriDB = require('../app/kanriDB');
var ygTbl = kanriDB.tbl_yg;
var shoEdit = require('../app/sho_edit');
var juzenEdit = require('../app/juzen_edit');
var kanchiList = require('../app/kanchiList');

const { filter } = require('p-iteration');
var filterFcd = async function(azaCd, arr){
    const filteredFcds = await arr.filter( function(el, index, array) {
        //console.log(el);
        return (el.substr(0,2) === azaCd);
     });
     return filteredFcds;
} 


module.exports = {
////
    getJuzen: function (fude_code) {
        return rec = juzenEdit.get(kanriDB.h_juzen, fude_code);
        //console.log(rec);
      },
    
    getList: function(res, azaCd){
        //console.log(azaCd);
        let azamei = ygTbl.get_azamei(azaCd);
        //console.log(azamei);
        let arr = Object.keys(kanriDB.h_juzen());
        let arrF = filterFcd(azaCd, arr)
        arrF.then(function(val){
            res.render('juzen_list', { title: '字別従前地一覧', tbl: val, azamei: azamei, juEd: juzenEdit, h_juzen: kanriDB.h_juzen() });
             //console.log(val);
        });
    }
}




//