function toMainWin(str) {
  alert(str)
//  returnValue=str;
//  close()
}

$(function(){
    $('#btn_kensaku').on('click',function(){
        $.ajax({
            url:'request.php',
            type:'POST',
            data:{
                'userid':$('#userid').val(),
                'passward':$('#passward').val()
            }
        })
        .done(function(data){
            $('.result').html(data);
            console.log(data);

        })
        .fail(function(data){
            $('.result').html(data);
            console.log(data);

        });

    });
});