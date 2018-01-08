var tblYG = require('../app/tbl_yg');
var arrAza = tblYG.arrAza;
var render_panel = function(res, client){

    console.log("iten message sent")
    console.log(arrAza);
    console.log("xxxxxxx");
    res.render('panel_iten',{arrAza: arrAza});

}

module.exports = {
    //render: #defined below 

    process_panel: function(res, client){
        this.render = render_panel;
        console.log(this);
        this.render(res, client);
    }


}