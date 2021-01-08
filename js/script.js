$(document).ready(function(){

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
  

  $(document).keydown(function(event){
    if(event.which == 39){
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
    } else if (event.which == 37){
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
    }
  });


  $('.row:last-child i').click(function(){
    // alert($(this).index());
    var indice = $(this).index();
    // console.log(indice);
    var pallinoblu = $('i.blue');
    var immagineVisualizzata = $('img.active');
    immagineVisualizzata.find('active');
    immagineVisualizzata.removeClass('active');
    $('.immagini img').eq(indice).addClass('active');
    pallinoblu.find('blue');
    pallinoblu.removeClass('blue');
    $('.row:last-child i').eq(indice).addClass('blue');
  })
});

