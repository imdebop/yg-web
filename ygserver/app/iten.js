var tblYG = require('../app/tbl_yg');
var arrAza = tblYG.arrAza;
var render_panel = function(res, client){

    console.log("iten message sent")
    //console.log(arrAza);
    //res.render('panel_iten',{arrAza: arrAza});
    res.render('panel_iten',{iten: panelIten});

};

var items = Array.from(new Array(450)).map((v,i)=>i.toString());
var panelIten = (function(items){
    var dan = Math.ceil(items.length / 100)
    var  panelIten = new Array(dan);
    console.log(panelIten);

    for(let i=0; i<dan; i++){
        let str = `dan${i}`;
        panelIten[i] = Array.from(new Array(10)).map(() => []);
    };
    //console.log(panelIten);
    //items = ["1","231","421","422"]
    for(let item of items){
        let recsNum = items.length;
        let n = Number(item);
        let rank100 = Math.floor(n / 100);
        let rank10 = Math.floor( (n - 100*rank100) / 10);
        panelIten[rank100][rank10].push(item);
        //let str = `${n}:${rank100}:${rank10}/`;
        //process.stdout.write(str);
    }
    return panelIten;
})(items);
//process.stdout.write("\n");
console.log(panelIten);


module.exports = {
    //render: #defined below 

    process_panel: function(res, client){
        this.render = render_panel;
        console.log(this);
        this.render(res, client);
    }


}