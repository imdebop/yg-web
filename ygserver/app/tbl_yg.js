
'use strict';

const fs = require('fs');
const csvSync = require('csv-parse/lib/sync'); // requiring sync module

const file = './app/tbl_properties.csv';
let data = fs.readFileSync(file);

let res = csvSync(data);

var tbl_yg={};
res.forEach(el => {
    var id = el[0];
    var cd = el[2];
    var azamei = el[3];
    tbl_yg[id + "_" + cd] = azamei;
});
   //console.log(tbl_yg)


module.exports = {
    get_azamei: function (cd) {
        var id = "AZA_";
        var val = tbl_yg[id + cd];
        return val; 
    }
}
