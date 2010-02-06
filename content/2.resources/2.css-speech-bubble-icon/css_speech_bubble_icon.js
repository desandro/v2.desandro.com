
$(function() {

	$('#css-select form').show();

	var i = $('#css-select input').index( $('#css-select input:checked') );
	
	$('#css-select pre:not(:eq('+i+'))').hide();
	
	$('#css-select input').click(function(){
		var i = $('#css-select input').index(this);
		$('#css-select pre:not(:eq('+i+'))').hide();
		$('#css-select pre').eq( i ).show();
		if ( i == 0 ) {	$('#html-samples .col5:hidden').show(); }
		if ( i == 1 ) {	$('#html-samples .col5').hide();
						$('#html-samples .col5:eq(0), #html-samples .col5:eq(1), #html-samples .col5:eq(2) ').show();
		}
		if ( i == 2 ) {	$('#html-samples .col5').hide();
						$('#html-samples .col5:eq(3), #html-samples .col5:eq(4), #html-samples .col5:eq(5) ').show();
		}
		if ( i == 3 ) {	$('#html-samples .col5').hide();
						$('#html-samples .col5:eq(6), #html-samples .col5:eq(7) ').show();
		}
	});
	
}); 


