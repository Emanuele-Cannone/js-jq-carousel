$(document).ready(function(){

  // al click sulla classe dx assegna la classe active al primo figlio
  // $('.dx').click(function(){
  //   $('.immagini img:first-child').addClass('active');
  // });

    // in questo modo prendo come riferimento l'img che ha già la classe active

  $('.dx').click(function(){
    var immagineVisualizzata = $('img.active');
    var pallinoblu = $('i.blue');
    immagineVisualizzata.removeClass('active').next().addClass('active');
    pallinoblu.removeClass('blue').next().addClass('blue');
    if (immagineVisualizzata.hasClass('last')){
      $('img.first').addClass('active');
    }
    if (pallinoblu.hasClass('last')){
      $('i.first').addClass('blue');
    }

  });


  $('.sx').click(function(){
    var immagineVisualizzata = $('img.active');
    var pallinoblu = $('i.blue');
    immagineVisualizzata.removeClass('active').prev().addClass('active');
    pallinoblu.removeClass('blue').prev().addClass('blue');
    if (immagineVisualizzata.hasClass('first')){
      $('img.last').addClass('active');
    }
    if (pallinoblu.hasClass('first')){
      $('i.last').addClass('blue');
    }
  });
  

});