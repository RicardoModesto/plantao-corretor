$(function(){

	$('#conteudo ul li:odd').addClass('destaque');



	$('#conteudo ul.perguntas li').click(function(e){
		e.preventDefault();
		$(this).toggleClass('atv').find('p').slideToggle('fast');
		$(this).siblings('li').removeClass('atv').find('p').hide();
	});

	/*====================== feedback ==================== */
	$('.formContato form input.enviar').click(function(){
		$('form').hide();
		$('.feedback').show();
	});

});