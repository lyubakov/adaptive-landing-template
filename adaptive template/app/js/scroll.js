$(function() {
	$('.anchor-link').bind('click',function(event){
		var $anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $($anchor).offset().top - 20
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});