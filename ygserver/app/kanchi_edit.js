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
        let nayo = sprintf('%1$2d ブロック    %2$2d',
         Number(bk), Number(lot));
        if(!Number(eda)==0){
            nayo += sprintf('%1$2d',Number(eda))
        }
        nayo += " ロット";
        let hRec = {kan_code: kan_code, nayo: nayo};
        
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

        async.each(kanchis.sort, function(key, callback){
            // 処理1
            callback();

        }, function(err){
            //処理2
            if(err) throw err;

        });

        return tblKanByBlock = kanchis;

    }
}

