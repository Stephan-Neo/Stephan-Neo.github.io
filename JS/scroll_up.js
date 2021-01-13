(function($) {
    $(function() {

        $('#up').click(function() {
            $('body,html').animate({scrollTop:750},500);
            return false;
        })

    })
})(jQuery)