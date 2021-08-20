$(document).ready(function(){

    $('.main-owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        // animateOut: 'fadeOut',
        items: 1
    });

    $('.sedan-owl-carousel, .jeep-owl-carousel').owlCarousel({
        // autoplay:true,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });

    $('.van-owl-carousel').owlCarousel({
        // autoplay:true,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:2
            }
        }
    });

    $('.mobile-menu-button').click( function(){
        $('.mobile-menu').toggleClass('active-mobile-menu');
    });


    // ================== Contact label animation ================= \\
    // Text inputs
    $('#text-input').focus( function() {
        $('#text-input').addClass('active-input');
    } );
    $('#text-input').blur( function() {
        if( $('#text-input').val() == '' ) {
            $('#text-input').removeClass('active-input');
        } 
        if( $('#text-input').val() != '' ) {
            $('.text-input-error').css('display','none');
        }
    } );
    // E-mail inputs
    $('#email-input').focus( function() {
        $('#email-input').addClass('active-input');
    } );
    $('#email-input').blur( function() {
        if( $('#email-input').val() == '' ) {
            $('#email-input').removeClass('active-input');
        } 
        if( $('#email-input') != '' ) {
            $('.email-input-error').css('display','none');
        }
    } );
    // TextArea
    $('#textarea').focus( function() {
        $('#textarea').addClass('active-input');
    } );
    $('#textarea').blur( function() {
        if( $('#textarea').val() == '' ) {
            $('#textarea').removeClass('active-input');
        } 
        if( $('#textarea') != '' ) {
            $('.textarea-error').css('display','none');
        }
    } );
    // ================== Contact Validation ===================== \\
    $('.contact').submit( function(e) {
        e.preventDefault();

        if( $('#text-input').val().replace(/\s/g, '') <= 0 ) {
            $('.text-input-error').css('display','block');
        } else {
            $('.text-input-error').css('display','none');
        }

        if( $('#email-input').val().replace(/\s/g, '') <= 0 ) {
            $('.email-input-error').css('display','block');
        } else {
            $('.email-input-error').css('display','none');
        }

        if( $('#textarea').val().replace(/\s/g, '') <= 0 ) {
            $('.textarea-error').css('display','block');
        } else {
            $('.textarea-error').css('display','none');
        }

        console.log( $('#text-input').val(), $('#email-input').val(), $('#textarea').val() );

    } );

});