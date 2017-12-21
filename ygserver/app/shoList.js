var kanriDB = require('../app/kanriDB');
var kensakuEdit = require('../app/kensaku_edit');
var sho_rows = kanriDB.sho_rows();
var juCol = { name: 1, kana: 23 };
//console.log(sho_rows);

module.exports = {
    kensaku: function (kubun,s,res) {
        var data;
        var arr = [];
        if (s==''){console.log("検索文字がありません。"); return arr;};
   
        var sreg = new RegExp(s);

        var lookCol = juCol.name;
        if (kubun == "kana"){
          lookCol = juCol.kana;
        }
        var tStr;
        var name;
        var wkRow;
        var sho_code;
        for(var i in sho_rows) {
            var wkArr;
            wkRow = sho_rows[i];
            tStr = wkRow.value.split('|')[lookCol];
            if(sreg.test(tStr)) {
              wkArr = wkRow.value.split('|');
              name = wkArr[1];
              sho_code = wkArr[0];
              arr.push({name: name, sho_code:sho_code});
            }
          }
          var tbl = kensakuEdit.toTable(arr)
    
          res.render('sho_kensaku_res', { title: '権利者検索結果', owners: arr, tbl: tbl });
      },
    
}