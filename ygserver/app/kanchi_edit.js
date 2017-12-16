//var ygTbl = require('../app/tbl_yg');

module.exports = {
    get: function(h_kanchi, kan_code){
        if(!kan_code.length == 7){
            //エラー
            console.log("換地コードの長さが不正です");
        }
        //console.log(kan_code);
        let bk = kan_code.substr(0,2);
        let lot = kan_code.substr(2,3);
        let eda = kan_code.substr(5,2);
        let lotEd = sprintf('%1$1d',Number(lot));
        let bk_lot = sprintf('%1$2d ブロック %2$2d',
         Number(bk), Number(lot));
        if(!Number(eda)==0){
            let str = sprintf('-%1$2d',Number(eda));
            bk_lot += str;
            lotEd += str;
        }
        bk_lot += " ロット";
        let kanRec = h_kanchi[kan_code].split("|");
        let men = kanRec[3];
        let sho_code = kanRec[4];
        let hRec = {
            bk: bk,
            lot: lot,
            eda: eda,
            lotEd: lotEd,
            kan_code: kan_code,
            bk_lot: bk_lot,
            men: men,
            sho_code: sho_code,
            };
        
        //console.log(hRec);
        return hRec;
    },

    getByBlock: function(h_kanchi, gaiku){
        var async = require('async');
        let gaikuCD = sprintf('%1$02d',Number(gaiku));
        let tblKanByBlock = [];
        let keys = Object.keys( h_kanchi );

        let kanchis = keys.filter(function(el){
            elGaiku = el.substr(0,2);
            if(gaikuCD === elGaiku){
                return true;
            }
        });

        async.each(kanchis.sort(), function(key, callback){
            //console.log(module.exports.get);
            let hRec = module.exports.get(h_kanchi, key);
            let h = {
                kan_code: key,
                bk_lot: hRec.bk_lot,
                men: hRec.men,
                sho_code: hRec.sho_code,
            }
            tblKanByBlock.push(hRec);
            callback();
        });

        return tblKanByBlock = tblKanByBlock;

    }
}

