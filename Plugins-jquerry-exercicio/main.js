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

  // Handle menu visibility on resize
  // This function ensures the menu is always visible on larger screens (desktop)
  // and relies on CSS for its initial hidden state on smaller screens (mobile).
  // The slideToggle handles visibility on mobile.
  function handleMenuVisibility() {
    if ($(window).width() > 768) {
      $("nav ul").show(); // Ensure menu is visible on desktop
    }
    // No 'else' block here. On mobile, CSS handles the default 'display: none',
    // and the slideToggle handles user interaction. This prevents the menu
    // from being forcibly hidden if the user opened it and then resized slightly.
  }

  $(window).resize(handleMenuVisibility);
  handleMenuVisibility(); // Call on page load to set initial state

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
