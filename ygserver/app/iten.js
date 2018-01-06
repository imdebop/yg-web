var tblYG = require('../app/tbl_yg');
var arrAza = tblYG.arrAza;

module.exports = {
    render_panel: function(res){
        console.log("iten message sent")
        console.log(arrAza);
        console.log("xxxxxxx");
        res.render('panel_iten',{arrAza: arrAza});
  
    }
}