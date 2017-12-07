
// kumi_edit
var juzenEdit = require('../app/juzen_edit');

module.exports = {
    toTable: function(sho_code, arr, h_juzen){
        //console.log(arr);
        var tblBox = [];
        arr.forEach(function(rec){ 
            var lands = rec.juzen.split("|");
            var kanchis = rec.kanchi.split("|");
            var kanType = "1";
            if(lands.length > 1){kanType = "n";}
            if(kanchis.length > 1){
                kanType += "n"
            }else{
                kanType += "1"
            }
            //console.log(h_juzen);
            console.log(juzenEdit.get(h_juzen, lands[0]));
            tblBox.push([lands, kanchis]);
        });
        return tblBox;
        //console.log(tblBox);
    }
}