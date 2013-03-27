$(function(){

  /* ================== limpa/devolve o value dos inputs  ================== */
  $("input:text, textarea").each(function (){
      var v = this.value;

      $(this).blur(function (){
          if (this.value.length == 0) this.value = v;
      }).focus(function (){
          this.value = "";
      }); 
  });

  $('#conteudo #login input.btnLogin').click(function(e) {
		e.preventDefault();
		$('#conteudo .box').show();
		$('#conteudo input.mail').fadeIn();
		$('#conteudo input.senha').fadeIn();
	});
  

});
