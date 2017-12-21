var kanriDB = require('../app/kanriDB');
var shoEdit = require('../app/sho_edit');
var juzenEdit = require('../app/juzen_edit');

module.exports = {
////
    getJuzen: function (fude_code) {
        return rec = juzenEdit.get(kanriDB.h_juzen, fude_code);
        //console.log(rec);
      },
    

}
