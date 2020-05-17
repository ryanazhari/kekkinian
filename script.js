$(window).ready(function(){
    if ($(window).width() <= 991){
        $('#hero-tentang').addClass('d-flex justify-content-center');
    }
});

// On Load
$(window).on('load', function() {
    $('.h1-header').addClass('show');
    $('.ilustrasi').addClass('show');
    $('p.p-des').addClass('show');
});

// Landing Element
$(window).scroll(function() {
    let hScroll = $(this).scrollTop();

    if( hScroll >= 550 ) {
        $('.hero-tentang').addClass('show');
    }

    if( hScroll >= $('.web-kategori').offset().top ) {
        $('.ig-content .img-fluid').each(function(i) {
           setTimeout(function() {
                $('.ig-content .img-fluid').eq(i).addClass('show');
           }, 300 * (i+1) );
        });
    }

    if( hScroll >= $('.web-lokasi').offset().top - 300 ) {
        $('iframe').addClass('show');
    }

    if( hScroll >= $('.web-online-order').offset().top - 300 ) {
        $('.brand-order img').addClass('show');
          
    }

});