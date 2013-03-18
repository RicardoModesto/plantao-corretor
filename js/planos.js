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

	/* coloca algumas classes e bgs */
	$('.conteudoEscolha .atvCorretor .tabela table tr td.first:even, .conteudoEscolha .atvImobiliaria .tabela table tr td.first:even').css('background','#f6f6f6');
	$('.conteudoEscolha .atvCorretor .tabela table tr td.first:odd, .conteudoEscolha .atvImobiliaria .tabela table tr td.first:odd').css('background','#f8f8f8');

	$('.conteudoEscolha .tabela table tr td.first').each(function(){
		$(this).next('td').addClass('plano1').next('td').addClass('plano2').next('td').addClass('plano3')
	});
	
	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano1:even, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano1:even').css('background','#e4eff0');
	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano1:odd, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano1:odd').css('background','#f1f7f7');

	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano2:even, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano2:even').css('background','#e7f0e6');
	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano2:odd, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano2:odd').css('background','#f3f8f2');

	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano3:even, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano3:even').css('background','#f0f2e8');
	$('.conteudoEscolha .atvCorretor .tabela table tr td.plano3:odd, .conteudoEscolha .atvImobiliaria .tabela table tr td.plano3:odd').css('background','#f7f9f3');


});