$(function(){
	var contador = 0;
	var listaImoveisDinamica = 0;
	
	var listaImoveisVenda = $('#imoveisVenda ul.listaImoveis > li').length;
	$('#imoveisVenda ul.listaImoveis').css('width',listaImoveisVenda * 222 + (listaImoveisVenda*18));
	
	var listaImoveisAluga = $('#imoveisAluga ul.listaImoveis > li').length;
	$('#imoveisAluga ul.listaImoveis').css('width',listaImoveisAluga * 222 + (listaImoveisAluga*18));
	/*alert(listaImoveisVenda);*/

	$('.controle').click(function(e){
		e.preventDefault();

		contador = parseInt($(this).attr('rel'));
		$(this).parent().children('.controle').show();
		$('ul.listaImoveis').removeClass('atv');
		$(this).parent().children('ul.listaImoveis').addClass('atv');
		listaImoveisDinamica = $('ul.atv > li').length;


		if($(this).hasClass('next')){
			contador = contador + 4;
		}
		else{
			contador = contador - 4;
		}

		if(contador >= listaImoveisDinamica - 4){
			$('.next').hide();
		}
		if(contador == 2){
			$('.prev').hide();
		}

		$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador * 222 - (contador *18)},500);
		
		$(this).attr('rel',contador);
	});
});