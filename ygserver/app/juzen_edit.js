var kanriDB = require('../app/kanriDB');
var h_sho = kanriDB.h_sho;
var shoEdit = require('../app/sho_edit');
var ygTbl = kanriDB.tbl_yg;

module.exports = {
    get: function(h_juzen, fude_code){
        var arr = h_juzen[fude_code].split('|');
        //console.log(arr);
        var rec = {
            choCD: arr[1],
            azamei: "",  // edit later
            chiban: arr[2],
            chimokuCD: arr[6],
            chimoku: "",
            tokiS: arr[7],
            shoyu: arr[8],
            name: "initVal",    //later
            kijunS: arr[9],
            m2shisu: arr[10],
            hyotei: arr[14]
        }

        rec.choCD = ("00" + Math.floor(rec.choCD)).slice(-3, -1);
        //console.log(rec.choCD);
        //console.log(ygTbl.get_azamei(rec.choCD));
        rec.azamei = ygTbl.get_azamei(rec.choCD);
        rec.chimoku = ygTbl.get_chimoku(rec.chimokuCD)
        rec.name = shoEdit.get(h_sho, rec.shoyu).name;
        return rec;
    }
}