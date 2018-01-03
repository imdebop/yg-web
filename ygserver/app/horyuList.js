var async = require('async');

module.exports = {
    render: function(res, data){
        //console.log(client);
        arr = JSON.parse(data);
        console.log(arr);
        var tbl = [];
        var wk;
        var h;
        async.each(arr, function(rec,callback){
            wk = rec[1];
            h = {
                'bk': wk[0],
                'lotEd': wk[1],
                'name': wk[2],
                'men': 0    
            }
            tbl.push(h)
        }, function(err){
            if(err) throw err;
        });
        console.log(tbl)

       //res.send("aaaaaaaaaaaaaaaaa");
       res.render('kanchi_byBlock', { title: '街区別保留地一覧', tbl: tbl });
    }

}

