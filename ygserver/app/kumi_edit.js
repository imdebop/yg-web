
// kumi_edit

module.exports = {
    toTable: function(sho_code, arr){
        console.log(arr);
        var tblBox = [];
        arr.forEach(function(rec){ 
            var lands = rec.juzen.split("|");
            var kanchis = rec.kanchi.split("|");
            tblBox.push([lands, kanchis]);
        });
        return tblBox;
        //console.log(tblBox);
    }
}