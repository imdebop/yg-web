var ifCol =  require('../app/ifCol');

//ifCol.test;
var test = function(){
    module.exports.initTbl('kanchi');
    module.exports.setCD("0300300");
    //let arr = module.exports.getAr('kaishi01', 5);
    let arr = kaishiAed();
    console.log(arr);

    return;
    arr = Object.keys(ifCol.db.h_kanchi);
    console.log(arr.length);
    let key;
    for(let i=0; i<arr.length; i++){
       key = arr[i]; 
    }


}

var kaishiAed = function(){
    let date, num, koryoku, men;
    let res = [];
    let arr = kaishiA();
    if(arr == null){return [""];}
    for(i=0;i<arr.length;i++){
        [date,num,koryoku,men] = arr[i];
        str = date + "[" + num + "]" + "効:" + koryoku + ":地積" + men + "㎡"
        res.push(str);
    }
    return res;
}

var kaishiA = function(){
    let res = [];
    let str;
    let arr;
    for(let i=1;i<6;i++){
        str = "kaishi0" + String(i);
        arr = ifCol.getAr(str, 5);
        if(arr[0]!==""){
            res.push(arr);
        }
    }
    if(arr.length==0){
        return null;
    }else{
        return res;
    }
}


const kaiCols = [
    "kaishi01", "kaishi02", "kaishi03",
    "kaishi04", "kaishi05"
]



module.exports = ifCol;

//setTimeout( test  , 500);