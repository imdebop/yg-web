
$(function() {
    
    $('#opPanel').load('./panel_sho',function(){
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
            function ($this){ s_text = $this.target.textContent
            $('#content').load("./sho_kana?kana=" + s_text,
                function() {
                    $('#sho_list').on('click','.shoyusha', function ($this){
                        s_text = $this.target.attributes.sho_code.value;
                        kana_sub(s_text);
                    });
            
            });
        });
        $('#content').on('click','.tbl',               function($this){
                var s_text = $this.target.innerText;
                var sho_code = s_text.split(" : ")[1];
                console.log(sho_code);
            $('#content').load('./sho_kumi?owner=' + sho_code);
            //console.log("kensaku_name_clicked");
        });
    });

    var kana_sub = function(s_text){
        $('#content').load('./sho_kumi?owner=' + s_text);
        
        console.log(s_text);
    }

    
});

$(function() {
    $('#content').load('./content_top');
});

$(function(){
    $('#menuKanchi').on('click',function(){
        $('#opPanel').load('panel_kanchi',function(e){
            $('#gaiku_list').on('click','.gaiku', function ($this){
                console.log($this)
                s_text = $this.target.innerText;
                gaiku_sub(s_text);
            });

        });
    });

    var gaiku_sub = function(s_text){
        $('#content').load('./kanchi_list?gaiku=' + s_text);
        
        console.log(s_text);
    }

});


//$(function(){
//
//});



//$(function(){
//    $('#opPanel').on('click','.kana',alert())
//});

