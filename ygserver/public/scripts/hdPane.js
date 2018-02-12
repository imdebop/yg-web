$(function(){
    //$("#aaa").on('click',function(){
    //    console.log("aaaaaaaaaaaaaaaaaaaa")
    //});

    //var hdPane_sho = function(str){
    //    $('header').innerHTML = str;
    //};
    var addHdItem = function(){
        $("#hdBtnClear").on('click',function(){
            //$("#hdItems")[0].textContent = "";
            var aa = $("#hdItems");
            console.log(aa);
            let bt = document.createElement('button');
            bt.innerText = "bbbbbbb";
            $(bt).addClass("hdSho hdItem");
            aa[0].appendChild(bt);
            //aa[0].
            //console.log(aa[0].children["1"]);
        });
    }
});