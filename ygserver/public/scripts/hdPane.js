var hdPane_show = function(){
    $("#hdTop").hide();
    $("#hdSho").css('display', 'inline-grid');;
};

var hdPane_hide = function(){
    $("#hdBtnClear").on('click',function(){
        console.log("hd items cleared");
        $("#hdSho").hide();
        $("#hdItems").empty();
        $("#hdTop").show();
    });
}
$(hdPane_hide);

$("#hdBtnCreate").on('click',function($this){
    //var str = $("#hdItems")[0].innerText;
    var str = $("#hdItems")[0].children[1];
    console.log(str);
});



var addHdItem = function(str){
    console.log("addHdItem called")
        //$("#hdItems")[0].textContent = "";
        var aa = $("#hdItems");
        console.log(aa);
        let bt = document.createElement('button');
        bt.innerText = str;
        $(bt).addClass("hdSho hdItem");
        aa[0].appendChild(bt);
        hdPane_show();
        //aa[0].
        //console.log(aa[0].children["1"]);
}


var getKumi = function(){ $('#content').on('click','.tbl',
    function($this){
        var s_text = $this.target.innerText;
        var sho_code = s_text.split(" : ")[1];
        addHdItem(s_text);
        //hdPane_sho(s_text);
        $('#content').load('./sho_kumi?owner=' + sho_code);
        $(".mainfooter").load("./aaabbb?shoCd="+ sho_code);
        //console.log("kensaku_name_clicked");
    });
}

