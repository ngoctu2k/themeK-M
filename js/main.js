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
autoplay:false,
autoplayHoverPause:true,
autoPlay: 3000,
items : 4,
margin:20,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
center: false,
nav:false,
loop:true,
responsive: {
600: {
items: 4
}
}






});

});