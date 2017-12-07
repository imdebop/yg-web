module.exports = {
    get: function(h_sho, sho_code){
        var arr = h_sho[sho_code].split('|');
        var rec = {
            sho_code: arr[0],
            name: arr[1],
            kana: arr[23]
        };
        //console.log(arr);
        return rec;


    }
}