var kanriDB = require('../app/kanriDB');
var shoEdit = require('../app/sho_edit');
var juzenEdit = require('../app/juzen_edit');
var kanchiList = require('../app/kanchiList');


module.exports = {
////
    getJuzen: function (fude_code) {
        return rec = juzenEdit.get(kanriDB.h_juzen, fude_code);
        //console.log(rec);
      },
    
    getList: function(azaCd){
        console.log(Object.keys(kanriDB.h_juzen()));
        //console.log(kanriDB.h_juzen);
    }
}
