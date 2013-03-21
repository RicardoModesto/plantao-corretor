$(function(){
	$('.selectEstado').dropkick();
	$('.selectCidade').dropkick();
	$('.selectEstadoCadastro').dropkick();
	$('form').customForm();

	$('#geral #header .boxBusca .boxDestaque dl dt').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("checked");
	});



	$('#geral #header .boxBusca .boxDestaque .seleciona').click(function (e) {
		e.preventDefault();
		if($(this).hasClass('atv')){
			$('#geral #header .boxBusca .boxDestaque #scrollBairros').slideUp('fast');
			$(this).removeClass('atv');
		}
		else{
			$('#geral #header .boxBusca .boxDestaque #scrollBairros').slideDown('fast', function () {
				$('#geral #header .boxBusca .boxDestaque .seleciona').addClass('atv');
				$('#scrollBairros').tinyscrollbar();
			});	
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