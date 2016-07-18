$(document).ready(function() {
	$width = $('.header_mobile').outerHeight() + 'px';
	$('.header__hamburger').css('width', $width);
});
$(window).resize(function() {
	$width = $('.header_mobile').outerHeight() + 'px';
	$('.header__hamburger').css('width', $width);
});

