$(function(){

	$('.gone').removeClass('gone');
	
	$('#demo').removeClass('size28').removeClass('size56')
				.removeClass('size140').removeClass('size280')
				.removeClass('standard').removeClass('inspect');
	var fontsize = $('#fontsizes input:checked').val();
	var display =  $('#display input:checked').val();
	$('#demo').addClass( fontsize ).addClass( display );

	
	$('#fontsizes input').click(function(){
		$('#demo').removeClass('size28').removeClass('size56')
					.removeClass('size140').removeClass('size280');
		var fontsize = $(this).val();
		$('#demo').addClass( fontsize );
	});

	$('#display input').click(function(){
		$('#demo').removeClass('standard').removeClass('inspect');
		var display = $(this).val();
		$('#demo').addClass( display );
	});


	
});