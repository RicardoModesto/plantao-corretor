$(function(){

	$('.headerEscolha .escolha').mouseenter(function(){

		$('.escolha').removeClass('atv');
		$('.atvCorretor, .atvImobiliaria').hide();

		if($(this).hasClass('corretor')){
			$(this).addClass('atv');
			$('.atvCorretor').show();
		}
		else{
			$('.headerEscolha .escolha.imobiliaria').addClass('atv');
			$('.atvImobiliaria').show();
		}

	});

});