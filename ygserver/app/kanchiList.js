var kanriDB = require('../app/kanriDB');
var kanchi_edit = require('../app/kanchi_edit');
var shoList = require('../app/shoList');

var h_kanchi = kanriDB.h_kanchi;
//console.log(h_kanchi);

module.exports = {

    getByBlock: function(gaiku, res){
        var async = require('async');
        let gaikuCD = sprintf('%1$02d',Number(gaiku));
        let tblKanByBlock = [];
//        let h_kanchi = kanriDB.h_kanchi;
        let keys = Object.keys( h_kanchi );
        //console.log(keys);

        let kanchis = keys.filter(function(el){
            elGaiku = el.substr(0,2);
            if(gaikuCD === elGaiku){
                return true;
            }
        });
        
        async.each(kanchis.sort(), function(key, callback){
            //console.log(module.exports.get);
            let hRec = kanchi_edit.get(h_kanchi, key);
            let h = {
                kan_code: key,
                bk_lot: hRec.bk_lot,
                men: hRec.men,
                sho_code: hRec.sho_code,
            }
            tblKanByBlock.push(hRec);
            callback();
        });

        let name;
        async.each(tblKanByBlock, function(h,callback){
            name = shoList.getOne(h.sho_code).name;
            //console.log(name);
            h.name = name;
          });

        res.render('kanchi_byBlock', { title: '街区別換地一覧', tbl: tblKanByBlock });

        //return tblKanByBlock = tblKanByBlock;

    }

}