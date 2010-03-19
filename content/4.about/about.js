;$(function(){
    if( $('.csstransforms').length ) {
        var liCount = $('#socialize li').length;

		$('#socialize li').each(function(i){
			var theta = (360/liCount)*i;
			var transformation = 'rotate(' + theta + 'deg)';
			$(this).css({
				'-webkit-transform': transformation,
                   '-moz-transform': transformation,
				     '-o-transform': transformation
			});
		});
        
    }
});