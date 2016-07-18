$(document).ready(function(){
  $('.carousel').slick({
  	dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7500
  });
  optionSlick();
})
function optionSlick() {
  $('.options').slick({
    dots: false,
    mobileFirst: true,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    initialSlide: 2,
    appendArrows: ('.section_options'),
    responsive: [
      {
        breakpoint: 1200,
        settings: "unslick",
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          appendArrows: ('.container_options'),
          infinite: true,
          variableWidth: true,
          centerMode: true,
          centerPadding: 0
        }
      },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        appendArrows: ('.section__header_options'),
        infinite: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: 0
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
}
$(window).resize(function() {
  if ($(window).width() <= 1200) {
    optionSlick();
  }
});
$('.carousel').on('swipe', function(event, slick, direction){
  if ($(window).width() <= 1020) {
    $pt = $('.slick-active .button-cta_firstscreen').position().top + parseInt($('.slick-active  .item__header_firstscreen').css('margin-bottom')) + parseInt($('.slick-active  .item__description_firstscreen').css('margin-bottom')) + $('.slick-active .button-cta_firstscreen').outerHeight(true) + 'px';
    $('.slick-dots').css('top', $pt);
  }
});
$('.carousel').on('afterChange', function(){
  if ($(window).width() <= 1020) {
    $pt = $('.slick-active .button-cta_firstscreen').position().top + parseInt($('.slick-active  .item__header_firstscreen').css('margin-bottom')) + parseInt($('.slick-active  .item__description_firstscreen').css('margin-bottom')) + $('.slick-active .button-cta_firstscreen').outerHeight(true) + 'px';
    $('.slick-dots').css('top', $pt);
  }
});
$(document).ready(function() {
  if ($(window).width() <= 1020) {
    $pt = $('.slick-active .button-cta_firstscreen').position().top + parseInt($('.slick-active  .item__header_firstscreen').css('margin-bottom')) + parseInt($('.slick-active  .item__description_firstscreen').css('margin-bottom')) + $('.slick-active .button-cta_firstscreen').outerHeight(true) + 'px';
    $('.slick-dots').css('top', $pt);
  }
});
$(window).resize(function() {
  if ($(window).width() <= 1020) {
  $newpt = $('.slick-active .button-cta_firstscreen').position().top + parseInt($('.slick-active  .item__header_firstscreen').css('margin-bottom')) + parseInt($('.slick-active  .item__description_firstscreen').css('margin-bottom')) + $('.slick-active .button-cta_firstscreen').outerHeight(true) + 'px';
  $('.slick-dots').css('top', $newpt);
  }
});
$( window ).on( "orientationchange", function( event ) {
  if ($(window).width() <= 1020) {
    $orpt = $('.slick-active .button-cta_firstscreen').position().top + parseInt($('.slick-active  .item__header_firstscreen').css('margin-bottom')) + parseInt($('.slick-active  .item__description_firstscreen').css('margin-bottom')) + $('.slick-active .button-cta_firstscreen').outerHeight(true) + 'px';
    $('.slick-dots').css('top', $orpt);
  }
});