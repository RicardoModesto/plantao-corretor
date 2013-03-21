$(function(){
	$('.selectEstado').dropkick();
	$('.selectCidade').dropkick();
	$('form').customForm();

	$('#geral #header .boxBusca .boxDestaque dl dt').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("checked");
	});

	$('#geral #header .boxBusca .boxDestaque .seleciona').click(function (e) {
		e.preventDefault();
		$('#geral #header .boxBusca .boxDestaque dl').slideDown('fast', function () {
			$('#scrollBairros').tinyscrollbar();
		});	
	});





});