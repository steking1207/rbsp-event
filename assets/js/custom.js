$(function(){
    $('.anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 120}, 750);
		return false;
	});
});
