
// kumi_edit
var juzenEdit = require('../app/juzen_edit');
var kanchiEdit = require('../app/kanchi_edit');

module.exports = {
    toTable: function(sho_code, arr, h_juzen, h_kanchi){
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
            //console.log(lands);
            //console.log(juzenEdit.get(h_juzen, lands[0]));
            for(let i=0; i<lands.length; i++){
                let rec = juzenEdit.get(h_juzen, lands[i]);
                let land = rec.azamei + " " + rec.chiban;
                lands[i] = land;
            }
            for(let i=0; i<kanchis.length; i++){
                let hRec = kanchiEdit.get(h_kanchi, kanchis[i]);
                kanchis[i] = hRec;
            }
            //console.log(kanchis);
            tblBox.push([lands, kanchis]);
        });
        //console.log(tblBox[0][1][0].nayo);
        return tblBox;
    }
}