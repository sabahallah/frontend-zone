$(document).ready(function(){

    /* this is for sticky navigation */
    $('.js--section-features').waypoint(function(direction) {

        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' /* this will happen 60px before we come to the section .js--section-feature we defined */
    });

    /* scroll when clicking the buttons */
    $('.js--scroll-to-plans').click(function(){  
        $("html, body").animate( {scrollTop: $('.js--section-plans').offset().top}, 1000);/*js-section-feature*/
    });

    $('.js--scroll-to-start').click(function(){  
        $("html, body").animate( {scrollTop: $('.js--section-features').offset().top}, 1000);/*js-section-feature*/
    });

    /* animation on scroll */
    $('.jq-wp-animation-1').waypoint(function(direction) {
        $('.jq-wp-animation-1').addClass('animated fadeIn');
    }, {
        offset: '50%;' /* this will happen 60px before we come to the section .js--section-feature we defined */
    });

    $('.jq-wp-animation-2').waypoint(function(direction) {
        $('.jq-wp-animation-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;' /* this will happen 60px before we come to the section .js--section-feature we defined */
    });

    $('.jq-wp-animation-3').waypoint(function(direction) {
        $('.jq-wp-animation-3').addClass('animated fadeIn');
    }, {
        offset: '50%;' /* this will happen 60px before we come to the section .js--section-feature we defined */
    });

    $('.jq-wp-animation-4').waypoint(function(direction) {
        $('.jq-wp-animation-4').addClass('animated pulse');
    }, {
        offset: '50%;' /* this will happen 60px before we come to the section .js--section-feature we defined */
    });

    /* mobile navigation */
    $('.mobile-nav-icon').click(function(){
        var nav = $('.main-dev');
        var icon = $('.menu-icon');
        var attr = icon.attr('class')

        /* open and close a box */
        nav.slideToggle(200); /* how many times the animation should take */

        if(icon.hasClass('ion-md-menu')){
            icon.removeClass('ion-md-menu');
            icon.addClass('ion-md-close');
        }else{
            icon.removeClass('ion-md-close');
            icon.addClass('ion-md-menu');
        }
    });

});