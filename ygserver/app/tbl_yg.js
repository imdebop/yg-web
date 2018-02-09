
'use strict';

const fs = require('fs');
const csvSync = require('csv-parse/lib/sync'); // requiring sync module

const file = './app/tbl_properties.csv';
let data = fs.readFileSync(file);

let res = csvSync(data);

var arrAza = [];
var arrCmk = [];
var tbl_yg={};
res.forEach(el => {
    let id = el[0];
    let cd = el[2];
    let str = el[3];
    tbl_yg[id + "_" + cd] = str;
    if (id === "AZA"){
        arrAza.push([cd, str])
    }
    if (id === "CMK"){
        arrCmk.push([cd, str])
    }
});
   //console.log(tbl_yg);


module.exports = {
    //hash data = { AZA_01: '牟呂町字大塚' .....
    get_azamei: function (cd) {
        var id = "AZA_";
        var val = tbl_yg[id + cd];
        return val; 
    },

    get_chimoku: function (cd) {
        var id = "CMK_";
        var val = tbl_yg[id + cd];
        return val; 
    },
    
    arrAza: arrAza,
    arrCmk: arrCmk
}
