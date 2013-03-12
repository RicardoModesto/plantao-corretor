$(function(){
	var contador = 2;
	$('.next').click(function(e){
		e.preventDefault();

		contador = contador + 4;
		$(this).parent().children('.prev').show();
		$(this).parent().children('ul.listaImoveis').animate({'margin-left':-contador * 222 - (contador *18)},500);
		

	});
});