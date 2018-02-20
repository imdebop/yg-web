var kanriDB = require('../app/kanriDB');
var shoList = require('../app/shoList');
//var juzenEdit = require('../app/juzen_edit');
var kumiEdit = require('../app/kumi_edit');
//var kanchiList = require('../app/kanchiList');
var h_juzen = kanriDB.h_juzen();
//var h_kanchi = kanriDB.h_kanchi();
var h_kumi = kanriDB.h_kumi();
var h_kanchi = kanriDB.h_kanchi;


module.exports = {
    get: function (s, res) {
        //console.log( h_kumi[s] );
    
        var tblBox = kumiEdit.toTable(s, h_kumi[s], h_juzen, h_kanchi);
        var shoRec = shoList.getOne(s);
        res.render('sho_nayose', { title: '名寄せ一覧', name: shoRec.name, tblBox: tblBox });
        
      },
    
}
