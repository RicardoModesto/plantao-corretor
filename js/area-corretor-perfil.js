$(function(){


	/* ================== abas  ================== */
	var abas = 'span.abasPerfil';
	var conteudos = 'ul.conteudo';
	$(conteudos + ' li').hide();
	$(conteudos + ' li:first-child').show();
		
	$(abas + ' a').click(function(e){
		e.preventDefault();
		$(abas + ' a').removeClass('selected');
		$(this).addClass('selected');	
		$(conteudos + ' li').hide();	
		$(conteudos +  ' ' + $(this).attr('href')).show();
	});
	

    /* ================== modal chat ================== */
    var largura = $(document).width();
    var altura = $(document).height();
    var abreModal = $("div.boxAbas span.abasPerfil a.chat");

    $(abreModal).click(function (e) {
    	e.preventDefault();
    	$(".overlay").width(largura).height(altura).fadeIn();
    });

    $('img.fechar').click(function (e) {
    	e.preventDefault();
    	$('.overlay').fadeOut();
    });




    /* ================== slider  ================== */


	var thumbs = '.overview';
	var imagens = 'ul.imagens';
	$(imagens + ' li').hide();
	$(imagens + ' li:first-child').show();
		
	$(thumbs + ' a').click(function(e){
		e.preventDefault();
		$(thumbs + ' a').removeClass('selected');
		$(this).addClass('selected');	
		$(imagens + ' li').hide();	
		$(imagens +  ' ' + $(this).attr('href')).show();
	});

  

    /* ================== checkbox redes sociais ================== */

    

    $('#geral .left ul a').click(function (e) {
    	e.preventDefault();

    	var rede = $(this).attr('rel');

    	$(this).toggleClass("checked");

		$(this).next("li").toggleClass('changeColor');

		if (rede == "facebook") {
			$(this).next("li").find("span").toggleClass('changeIconFace');

		} else if (rede == "twitter"){
			$(this).next("li").find("span").toggleClass('changeIconTwitter');

		} else if (rede == "linkedin"){
			$(this).next("li").find("span").toggleClass('changeIconLinkedin');
		};


    	if ($('#geral .left ul a').hasClass('checked')) {
		    $("#geral .left ul li").hover(function() {
		    	$(this).find('input').fadeIn();
		    }, function() {
		    	$(this).find('input').fadeOut();
		    });
		};

    });


    $('#geral .cadastro a.mais').click(function (e) {
    	e.preventDefault();
    	$(this).prev('input').clone().insertBefore(this);
    });


  

});


