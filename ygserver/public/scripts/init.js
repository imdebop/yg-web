//var aaa = require( "./hdPane" );

var kenriPanel = function() {
    console.log("kenriPanel in init.js called");
    $('#opPanel').load('./panel_sho',function(){
        console.log("panel_sho loaded")
        $('#opPanel').on('submit','.kensaku',function(event) {
            // HTMLでの送信をキャンセル
            event.preventDefault();
            //var s_text = $this.target;
            element = document.getElementById('.input_kanji');
            s_kanji = event.target.elements[0].value;
            $('#content').load("./sho_kanji?s_kanji=" + s_kanji);
            
            //console.log();
         
            // …
        });
    
        $('#kana_kensaku').on('click','.kana',
            function ($this){ s_text = $this.target.textContent;
            $('#content').load("./sho_kana?kana=" + s_text, //getKumi
            );
        });
    });


    getKumi();
    // = function(){
        //$('#content').on('click','.tbl', function($this){
        //    var s_text = $this.target.innerText;
        //    var sho_code = s_text.split(" : ")[1];
        //    hdPane_sho(s_text);
        //    $('#content').load('./sho_kumi?owner=' + sho_code);
        //    //console.log("kensaku_name_clicked");
        //});
    //}
}
var hdPane_sho = function(str){
    console.log(str);
    $("#hdTop").hide();
    $("#hdSho").css('display', 'inline-grid');;
    $("#hdItems")[0].textContent += ("/" + str);
    //console.log($('#hdItems'));
};

    /*
    var kana_sub = function(s_text){
        $('#content').load('./sho_kumi?owner=' + s_text);
        
        console.log(s_text);
    }
    */
//}
var getKumi = function(){ $('#content').on('click','.tbl',
    function($this){
        var s_text = $this.target.innerText;
        var sho_code = s_text.split(" : ")[1];
        addHdItem();
        hdPane_sho(s_text);
        $('#content').load('./sho_kumi?owner=' + sho_code);
        $(".mainfooter").load("./aaabbb?shoCd="+ sho_code);
        //console.log("kensaku_name_clicked");
    });
}

$(kenriPanel);

//$(function() {
//    $('#content').load('./content_top');
//});

var contentLoad = function() {
    $('#content').load('./content_top');
}
$(contentLoad);

$(function(){
    $('#menuKenri').on('click',function(){
        $(kenriPanel);
        console.log("menukenri")
    });

    
    $('#menuKanchi').on('click',function(){
        $('#opPanel').load('panel_kanchi',function(e){
            $('#gaiku_list').on('click','.gaiku', function ($this){
                //console.log($this)
                s_text = $this.target.innerText;
                gaiku_sub(s_text);
            });

        });
    });

    var gaiku_sub = function(s_text){
        $('#content').load('./kanchi_list?gaiku=' + s_text);
        
        //console.log(s_text);
    }


    $('#menuHoryu').on('click',function(){
        $('#opPanel').load('panel_horyu',function(e){
            $('#horyu_list').on('click','.gaiku', function ($this){
                //console.log($this)
                s_text = $this.target.innerText;
                //console.log(s_text);
                horyu_sub(s_text);
            });
        });
        console.log("menuHoryu")
    });

    var horyu_sub = function(s_text){
        $('#content').load('./horyu_list?gaiku=' + s_text);
        
    }

    $('#menuJuzen').on('click',function(){
        $('#opPanel').load('panel_juzen',function(e){
            //$('#horyu_list').on('click','.gaiku', function ($this){
                //console.log($this)
            //    s_text = $this.target.innerText;
                //console.log(s_text);
            //    horyu_sub(s_text);
            //});
            $('.panelAza').on('click',function(e){
                var azaCd;
                azaCd = e.target.attributes.value.value;
                console.log(azaCd);
                e.preventDefault;
                $('#content').load('./juzen_list?azaCd=' + azaCd,function(){
                    //getKumi();
                    console.log("get kumi set in juzen list");
                });
            })
                });
        console.log("menuJuzen")
    });




});


//$(function(){
//
//});



//$(function(){
//    $('#opPanel').on('click','.kana',alert())
//});

