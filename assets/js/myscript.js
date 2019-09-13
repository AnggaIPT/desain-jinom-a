$(document).ready(function(){
    $("#testimoni-slide").owlCarousel({
        center: true,
        items:3,
        margin:15,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true,
    });
})
new WOW().init();