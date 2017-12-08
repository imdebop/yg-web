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
    }
}

