$(function(){

	$('#conteudo ul li:odd').addClass('destaque');

	$('#conteudo ul li h4').click(function(){
		if($(this).parent('li').hasClass('atv')){

			$(this).parent('li').removeClass('atv').children('p').hide();
		}
		else{
			$(this).parent('li').addClass('atv').children('p').show();
		}
		
	});

	/*====================== feedback ==================== */
	$('.formContato form input.enviar').click(function(){
		$('form').hide();
		$('.feedback').show();
	});

});