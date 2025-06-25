$(document).ready(function () {
  $(".carousel").slick({
    dots: true, // Mostra os pontos de navegação
    infinite: true, // Carrossel infinito
    speed: 500, // Velocidade da transição em ms
    fade: true, // Efeito de fade em vez de slide
    cssEase: "linear",
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo entre os slides em ms
  });

  $("#menu-hamburguer").click(function () {
    $("nav ul").slideToggle();
  });

  // Garante que o menu de navegação se comporte corretamente ao redimensionar a tela.
  // O problema original era que ao diminuir a tela (ex: de desktop para tablet),
  // o menu permanecia aberto por causa de um estilo inline adicionado pelo jQuery.
  function handleMenuVisibility() {
    // O ponto de quebra (breakpoint) para o menu hambúrguer é 1023px, conforme o CSS.
    if ($(window).width() > 1023) {
      // Em telas maiores (desktop), removemos quaisquer estilos embutidos (inline styles)
      // que o jQuery (ex: slideToggle) possa ter adicionado. Isso faz com que o menu
      // volte a ser controlado apenas pelo CSS, exibindo-se corretamente como menu horizontal.
      $("nav ul").removeAttr('style');
    }
  }

  $(window).resize(handleMenuVisibility);

  // Aplica máscaras aos campos do formulário usando jQuery Mask Plugin
  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  // Aplica validação ao formulário usando jQuery Validate Plugin
  $('#form-compra').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    // Mensagens em português já são carregadas pelo script messages_pt_BR
    submitHandler: function(form) {
      alert("Sua proposta foi enviada com sucesso! Entraremos em contato em breve.");
      form.reset(); // Limpa o formulário após o envio
    }
  });
});
