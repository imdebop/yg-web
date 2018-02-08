//var async = require('async');

module.exports = {
    process: function(res, client, msg){
        client.send(msg, res, this);
    },

    render: function(res, data){
        //console.log(this);
        console.log("returning message in itenInfo");
        console.log(data);
            res.send(data);
            return
    }

}

