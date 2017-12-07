var ygTbl = require('../app/tbl_yg');

module.exports = {
    get: function(h_juzen, fude_code){
        var arr = h_juzen[fude_code].split('|');
        console.log(arr);
        var rec = {
            choCD: arr[1],
            chiban: arr[2],
            chimoku: arr[6],
            tokiS: arr[7],
            shoyu: arr[8],
            kijunS: arr[9],
            m2shisu: arr[10],
            hyotei: arr[14]
        }

        rec.choCD = ("00" + Math.floor(rec.choCD)).slice(-3, -1);
        //console.log(rec.choCD);
        //console.log(ygTbl.get_azamei(rec.choCD));
        rec.azamei = ygTbl.get_azamei(rec.choCD);
        return rec;
    }
}