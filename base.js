$(function(){
	//alert(qtdProdutoEscolhido);

	/* ============ navegação submenu ============== */
	$('.subMenu ul li a').click(function(e){
		e.preventDefault();
		var thisIndex = $(this).parent('li').index();
		var thisRel = $(this).attr('rel');

		$('.subMenu ul li a').removeClass('subAtivo');
		$(this).addClass('subAtivo');

		$('.center > div').hide();
		$('#'+thisRel).show();

		if(thisIndex == 0){
			$('.setaSubMenu').animate({'margin-left':120},500);
		}
		if(thisIndex == 1){
			$('.setaSubMenu').animate({'margin-left':435},500);
		}
		if(thisIndex == 2){
			$('.setaSubMenu').animate({'margin-left':750},500);
		}
		

	});

	/* escolha de um dos produtos */
	var qtdProdutoEscolhido = 0;
	$('.escolhaCliente .escolha a').click(function(e){
		e.preventDefault();

		// remove a class produtoEscolhido  das divs e zera o contador
		$('#clienteVelox, #clienteOi').hide().removeClass('produtoEscolhido');
		contador = 0;
		$('.passos span.numeroPasso').html('0'+(contador+1));
		$('.prev').hide();
		$('.next').show();

		// rezeta a margem das uls
		$('#clienteVelox ul, #clienteOi ul').css('margin-left',0);

		var rel = $(this).attr('rel');
		$('.mascaraPassos, .next, .passos').css('opacity',1);
		$('#'+rel).show().addClass('produtoEscolhido');

		//coloca a quantidade de passos do produto escolhido
		qtdProdutoEscolhido = $('.produtoEscolhido ul li').length;
		$('.passos span.total').html(qtdProdutoEscolhido);

		// esconde os itens e mostra apenas o ativo
		$('.mascaraPassos .produtoEscolhido ul li').css('opacity',0).eq(0).css('opacity',1);
		
	});

	// esconde os itens
	$('.mascaraPassos, .passos, .controle').css('opacity',0);

	//seta a largura da ul de velox
	var qtdVelox = $('#clienteVelox ul li').length;
	$('#clienteVelox ul').css('width',qtdVelox * 1000);

	//seta a largura da ul de clienteOi
	var qtdOi = $('#clienteOi ul li').length;
	$('#clienteOi ul').css('width',qtdOi * 1000);


	/* animação da galeria de passos */
	var contador = 0;
	$('.mascaraPassos').delegate(".controle", "click", function(e){
		e.preventDefault();
		$('.controle').css('opacity',1).show();

		if($(this).hasClass('next')){
			contador++;
		}
		else{
			contador--;
		}

		if(contador == qtdProdutoEscolhido - 1){
			$('.next').hide();
		}
		if(contador == 0){
			$('.prev').hide();
		}

		$('.passos span.numeroPasso').html('0'+(contador+1));
		$('.produtoEscolhido ul').animate({'margin-left':-contador * 1000},500);

		$('.mascaraPassos .produtoEscolhido ul li').eq(contador).animate({'opacity':1},1000).siblings().animate({'opacity':0},400)
	});

	/* ========== modal ========== */
	$('a.btnConhecaCompare').click(function(e){
		e.preventDefault();
		$('.mascara, .modal').fadeIn();
	});

	$('.modal .headerModal a.btnFechar').click(function(e){
		e.preventDefault();
		$('.mascara, .modal').fadeOut();
	});
	/* tool tipe da modal */
	$('.modal ul li a.toolTipe').mouseenter(function(){
		$(this).parent('.box').children('.boxToolTipe').show();
	}).mouseleave(function(){
		$(this).parent('.box').children('.boxToolTipe').hide();
	});
});