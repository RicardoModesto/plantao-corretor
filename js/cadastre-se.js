$(function(){

	$('.headerEscolha .escolha').mouseenter(function(){

		$('.escolha').removeClass('atv');
		$('.atvCorretor, .atvImobiliaria').hide();

		if($(this).hasClass('corretor')){
			$(this).addClass('atv');
			$('.atvCorretor').show();

			$('#conteudo h3').html('Olá Corretor, continue com seu cadastro. Levará apenas alguns minutos.');
		}
		else{
			$('.headerEscolha .escolha.imobiliaria').addClass('atv');
			$('.atvImobiliaria').show();
			$('#conteudo h3').html('Olá Imobiliária, continue com seu cadastro. Levará apenas alguns minutos.');
		}

	});

	/* coloca algumas classes e bgs */

	$('.conteudoEscolha .tabela table tr td.first').each(function(){
		$(this).next('td').addClass('plano1').next('td').addClass('plano2').next('td').addClass('plano3')
	});
	
	$('.conteudoEscolha .tabela table tr td.plano1:even').css('background','#e4eff0');
	$('.conteudoEscolha .tabela table tr td.plano1:odd').css('background','#f1f7f7');

	$('.conteudoEscolha .tabela table tr td.plano2:even').css('background','#e7f0e6');
	$('.conteudoEscolha .tabela table tr td.plano2:odd').css('background','#f3f8f2');

	$('.conteudoEscolha .tabela table tr td.plano3:even').css('background','#f0f2e8');
	$('.conteudoEscolha .tabela table tr td.plano3:odd').css('background','#f7f9f3');


});