$(document).ready(function(){
  // Mensaje de ayuda al pasar el cursor por el boton.
  $("#btn-enviar").tooltip({
    content: "Haz clic aquí para enviar",
    position: { my: "left center", at: "right center" }
  });
});

document.getElementById('btn-enviar').addEventListener('click', function() {
  // Genera un mensaje de confirmacion de envio
  alert('Tu mensaje ha sido enviado correctamente.');
});


$(document).ready(function() {
  $('.card').mouseenter(function() {
    // Ocultar el parrafo al pasar el cursor
    $(this).find('.card-text').fadeOut();
    // Ampliar imagen al pasar el cursor 
    $(this).find('.card-img-top').addClass('ampliada');
  });

  // 
  $('.card').mouseleave(function() {
    // Al salir de la card vuelve a mostrar el texto
    $(this).find('.card-text').fadeIn();
    // Ampli
    $(this).find('.card-img-top').removeClass('ampliada');
  });
});