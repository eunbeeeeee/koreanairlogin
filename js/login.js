/*********라디오 버튼 클릭시 변경 **************/
$(document).on('click', '.login-rad',function(){
    
    let chk = $('input:radio[name=ck]:checked').val();

    if(chk == '1'){
        $('#login-id3').css('display','block');
        $('#login-id2').css('display','none');
    }else if(chk == '2'){
        $('#login-id3').css('display','none');
        $('#login-id2').css('display','block');
    }
});

