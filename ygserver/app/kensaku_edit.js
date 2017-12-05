

module.exports = {
    toTable: function(owners){
        var row_max = 15;
        console.log(owners.length)
        var num = owners.length; 
        var rem;
        var rows;
        if ( num > 45){
            rem = num % 3;
            rows = (num - rem) / 3 + 1;
            console.log(owners[1]);
        }else if(num < 15){
            rows = num;
        }else{
            rows = 15;
        }

        for(let i = 0; i < rows; i++){
        //    let col = 
        }

    }
}