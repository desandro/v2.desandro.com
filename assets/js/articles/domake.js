$(document).ready(function(){


	var imgH = $('#do-images').height();
	var target = $('#do-images').offset().top + imgH/2;

	function fader() {
		var winH = $(window).height();
		var view = $(document).scrollTop() + winH/2;
		var a1 = ( (target+winH/4) - view) / (winH/2) ;
		var a2 = a1*-1 + 1;

		$('#domake').css( 'opacity', a1 );
		$('#invent').css( 'opacity', a2 );
	
	};

	// on start up
	fader();
		
	$(window).resize(function () { 
		fader();
	});		

	$(window).scroll(function () {
		fader();
	});

});