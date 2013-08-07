$(function() {

	// get mouse position
	//http://snipplr.com/view/7406/jquery--get-mouse-position/
    var mouseX = 0;
    var mouseY = 0;
    $(window).mousemove( function(e) {
	    mouseX = e.pageX;
	    mouseY = e.pageY;
    });
    
	
	var $s = $('p#uncover span');
	
	var spanX = new Array( $s.length );
	var spanY = new Array( $s.length );

	$s.each(function(i) {
		var offset = $(this).offset();
		spanX[i] = offset.left + $(this).width()/2;
		spanY[i] = offset.top + $(this).height()/2;
	}); 	
	
	$('body').mousemove(function() {
		$s.each(function(i) {
			var x = spanX[i] - mouseX;
			var y = spanY[i] - mouseY;
			var d = Math.round(Math.sqrt( x*x + y*y )) *.003;
			$(this).css({
			  background: 'rgba(255,255,255,'+d+')'
			});
		}); 
	});
	
});