module.exports = {
    get: function(h_sho, sho_code){
        if(sho_code === "5000"){
            return  {
                sho_code: sho_code,
                name: "保留地",
                kana: ""    
            }
        }

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