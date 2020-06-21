$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.menu-header ').addClass( 'affix-mobile');
  } else {
    $('.menu-header ').removeClass( 'affix-mobile');
  }
});

$(document).ready(function() {

$(".owl-carousel").owlCarousel({
autoplay:true,
autoplayHoverPause:true,
autoPlay: 3000,
smartSpeed: 1000,
items : 2,
margin:20,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
center: false,
nav:false,
loop:true,
responsive: {
768 : {
    items: 4
 }
}






});

});