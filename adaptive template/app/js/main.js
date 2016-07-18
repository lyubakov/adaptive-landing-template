$('.modalCall').on('click', function(event) {
	event.preventDefault();
	$('.form_hidden').bPopup();
});

$('.video__link_1').bind('click', function(e) {
    e.preventDefault();
    $('#video-1').bPopup({
        onClose: function(){ 
            var url = $(this).attr('src');
            $(this).attr('src', '');
            $(this).attr('src', url);
        },
    });
});
$('.video__link_2').bind('click', function(e) {
    e.preventDefault();
    $('#video-2').bPopup({
        onClose: function(){ 
            var url = $(this).attr('src');
            $(this).attr('src', '');
            $(this).attr('src', url);
        },
    });
});