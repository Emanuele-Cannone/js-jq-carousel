$(document).ready(function(){

  // al click sulla classe dx assegna la classe active al primo figlio
  // $('.dx').click(function(){
  //   $('.immagini img:first-child').addClass('active');
  // });

    // in questo modo prendo come riferimento l'img che ha già la classe active

  $('.dx').click(function(){
    var immagineVisualizzata = $('img.active');
    immagineVisualizzata.removeClass('active').next().addClass('active');
    if (immagineVisualizzata.hasClass('last')){
      $('img.first').addClass('active');
    }
  });


  $('.sx').click(function(){
    var immagineVisualizzata = $('img.active');
    immagineVisualizzata.removeClass('active').prev().addClass('active');
    if (immagineVisualizzata.hasClass('first')){
      $('img.last').addClass('active');
    }
  });
  











});