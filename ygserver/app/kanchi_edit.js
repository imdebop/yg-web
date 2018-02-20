//var kanriDB = require('../app/kanriDB');
var ifk = require('../app/ifKanchi');

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
        bk_lot += " ロット ";
        let kanRec = h_kanchi[kan_code].split("|");
        let men = kanRec[3];
        bk_lot += men;
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
    }


}

