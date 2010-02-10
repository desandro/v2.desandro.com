$(function(){

	$('#flag h3').wrapInner('<a href="#flag" />');

	var flagBody = $('#flag .flag_body')

	flagBody.hide().children().fadeTo(1, .01);
	

	
	$('#flag h3 a').data('visible', false)
		.click(function(){
	
		if( $(this).data('visible') == true ) {
			
			$(this).data('visible', false);
			flagBody.slideUp('slow')
				.children().fadeTo('slow', .01);
	
		} else {
				$(this).data('visible', true);
			flagBody.slideDown('slow')
				.children().fadeTo('slow', 1);
		}
	
		return false;
	});
	


	
	
});