$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('#up').fadeIn(400)
        }else{
            $('#up').fadeOut(700)
        }
    });
});