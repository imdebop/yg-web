

module.exports = {
    toTable: function(owners){
        var row_max = 8;
        //console.log(owners.length)
        var num = owners.length; 
        var rem;
        var rows;
        if ( num > 45){
            rem = num % 3;
            rows = (num - rem) / 3 + 1;
        }else if(num < row_max){
            rows = num;
        }else{
            rows = row_max;
        }
        
        var tblData=[];
        for(let i = 0; i < rows; i++){
            tblData.push([ 0, 0, 0]);
        }
        //console.log(owners[0]);

        for(let i = 0; i < num; i++){
            let col = Math.floor(i / rows);
            let row = i % rows;
            tblData[row][col] = owners[i];
        }
        //console.log(tblData);
        return tblData;

    }
}