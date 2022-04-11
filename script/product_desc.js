$(document).ready(function(){
  try{

    var item = $('.product__desc-item').children();

    for (var i = 0; i < item.length; i++) {
      if((item[i-1] == undefined && item[i].tagName == 'P') || (item[i].tagName == 'P' && item[i-1].tagName == 'P')){
        $(item[i]).addClass('no_label');
      }
    }
  }catch(err){
    console.log(err);
  }


  $('.desc__section-btn ul li a').on('click', function(e){
    e.preventDefault();
    let descItem = $(e.target.closest('a')).data('item');
    $.each($('.product__wrap').children(), function(index, item){
      if($(item).attr('id') == descItem){
        $('.desc__section-btn ul li a').removeClass('active');
        $(item).addClass('active');
      }else{
        $(item).removeClass('active');
      }
    });
    $(e.target.closest('a')).addClass('active');
  });

  $('.add_review a.btn__arrow').on('click', function(e){
    e.preventDefault();
    $('.add_review a.btn__arrow').toggleClass('active');
    $('.comment__item-add').toggleClass('active');
  });

  $('.comment__rating-inner li').mouseover(function(e){
    $('.comment__rating-inner li a').removeClass('active');
    if($(e.target.closest('a')).data('star')){
      $('.comment__rating-inner').children('a').removeClass('active');
      let starItem = $(e.target.closest('a')).data('star');
      let i = 1;
      $.each($('.comment__rating-inner').children(), function(index, item){
        if(i <= starItem){
          $($(item).children('a')).addClass('active');
        }
        i++;
      });
    }
  });

  $(document).on('click', function(e){
    if(!e.target.closest('.comment__rating-inner')){
      $('.comment__rating-inner li a').removeClass('active');
    }
  });

  $('.comment__rating-inner li a').on('click', function(e){
    e.preventDefault();
  });
});
