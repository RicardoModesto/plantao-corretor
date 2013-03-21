$(function(){

	var contador1 = 0;
	var contador2 = 0;

	var listaImoveisDinamica = 0;
	
	var listaImoveisVenda = $('#imoveisVenda ul.listaImoveis > li').length;
	$('#imoveisVenda ul.listaImoveis').css('width',listaImoveisVenda * 222 + (listaImoveisVenda*18));
	
	var listaImoveisAluga = $('#imoveisAluga ul.listaImoveis > li').length;
	$('#imoveisAluga ul.listaImoveis').css('width',listaImoveisAluga * 222 + (listaImoveisAluga*18));
	/*alert(listaImoveisVenda);*/


	/* =================== seta a posição de cada li ========================= */
	var v;
	for(v=0; v<=listaImoveisVenda; v++){
		$('#imoveisVenda ul.listaImoveis > li').eq(v).css('left',222*v + (v*18));
	}
	var a;
	for(a=0; a<=listaImoveisAluga; a++){
		$('#imoveisAluga ul.listaImoveis > li').eq(a).css('left',222*a + (a*18));
	}

	$('#conteudo #imoveisVenda').delegate(".controle","click", function(e){
		e.preventDefault();
		
		var posicaoUltimo = parseInt($('#imoveisVenda ul.listaImoveis > li:last-child').attr('style').replace('left:','').replace('px;',''));
		var posicaoPrimeiro = parseInt($('#imoveisVenda ul.listaImoveis > li:first-child').attr('style').replace('left:','').replace('px;',''));
		/*console.log(posicaoPrimeiro);*/

		if($(this).hasClass('next')){
			contador1++;
			$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador1 * 222 - (contador1 *18)},500, function(){
			var clonado = $('#imoveisVenda ul.listaImoveis > li').eq(0).clone();
			$('#imoveisVenda ul.listaImoveis > li').eq(0).remove();
			$('#imoveisVenda ul.listaImoveis').append(clonado);
			$('#imoveisVenda ul.listaImoveis > li:last-child').css('left',posicaoUltimo + 240);
			});
			
		}
		else{
			contador1--;
			$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador1 * 222 - (contador1 *18)},500);
			var clonado = $('#imoveisVenda ul.listaImoveis > li:last-child').clone();
			$('#imoveisVenda ul.listaImoveis > li:last-child').remove();
			$('#imoveisVenda ul.listaImoveis').prepend(clonado);
			$('#imoveisVenda ul.listaImoveis > li:first-child').css('left',posicaoPrimeiro - 240);
		}

	});

	
	$('#conteudo #imoveisAluga').delegate(".controle","click", function(e){
		e.preventDefault();
		
		var posicaoUltimo = parseInt($('#imoveisAluga ul.listaImoveis > li:last-child').attr('style').replace('left:','').replace('px;',''));
		var posicaoPrimeiro = parseInt($('#imoveisAluga ul.listaImoveis > li:first-child').attr('style').replace('left:','').replace('px;',''));
		/*console.log(posicaoPrimeiro);*/

		if($(this).hasClass('next')){
			contador2++;
			$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador2 * 222 - (contador2 *18)},500, function(){
			var clonado = $('#imoveisAluga ul.listaImoveis > li').eq(0).clone();
			$('#imoveisAluga ul.listaImoveis > li').eq(0).remove();
			$('#imoveisAluga ul.listaImoveis').append(clonado);
			$('#imoveisAluga ul.listaImoveis > li:last-child').css('left',posicaoUltimo + 240);
			});
			
		}
		else{
			contador2--;
			$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador2 * 222 - (contador2 *18)},500);
			var clonado = $('#imoveisAluga ul.listaImoveis > li:last-child').clone();
			$('#imoveisAluga ul.listaImoveis > li:last-child').remove();
			$('#imoveisAluga ul.listaImoveis').prepend(clonado);
			$('#imoveisAluga ul.listaImoveis > li:first-child').css('left',posicaoPrimeiro - 240);
		}

	});


	/* ================== abas  ================== */
	var abasHome = '#geral #header .boxBusca ul.abas';
	var conteudoHome = 'ul.boxDestaque';
	$(conteudoHome + ' li').hide();
	$(conteudoHome + ' li:first-child').show();
		
	$(abasHome + ' a').click(function(e){
		e.preventDefault();
		$(abasHome + ' a').removeClass('active');
		$(this).addClass('active');	
		$(conteudoHome + ' li').hide();	
		$(conteudoHome +  ' ' + $(this).attr('href')).show();
	});

});