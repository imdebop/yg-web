var ifCol =  require('../app/ifCol');

//ifCol.test;
var test = function(){
    module.exports.initTbl('kanchi');
    module.exports.setCD("0300300");
    let arr = module.exports.getAr('kaishi01', 5);

    console.log(arr);
    arr = Object.keys(ifCol.db.h_kanchi);
    console.log(arr.length);
    let key;
    for(let i=0; i<arr.length; i++){
       key = arr[i]; 
    }


}

var kaishiA = [];
var kaishiN = function(){
    let str;
    let arr;
    for(let i=1;i<6;i++){
        str = "kaishi0" + String(i);
        arr = ifCol.getAr(str, 5);
        
    }
}


const kaiCols = [
    "kaishi01", "kaishi02", "kaishi03",
    "kaishi04", "kaishi05"
]



module.exports = ifCol;

setTimeout( test  , 500);