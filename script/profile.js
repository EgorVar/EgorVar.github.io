$(document).ready(function(){
  // Появление меню в мобильной версии
  $('a.profile__user-name').on('click', function(e){
    e.preventDefault();
    $('a.profile__user-name').toggleClass('active');
    $('.profile__user-menu').toggleClass('active');
  });
  // Появление меню в мобильной версии

  // Переход между пунктами меню
  $('.profile__user-menu ul li a').on('click', function(e){
    if(e.target.classList[0] !== 'output'){
      e.preventDefault();
      $('.profile__user-menu ul li a').removeClass('active');
      $(e.target.closest('a')).addClass('active');
      $('.profile__inf').children().removeClass('active');
      let itemName = $(e.target).data('item');
      $.each($('.profile__inf').children(), function(index, item){
        if($(item).data('item_wrap') == itemName){
          $(item).addClass('active');
        }
      });
    }

  });
  // Переход между пунктами меню


  $('.card__favourite a.close').on('click', function(e){
    e.preventDefault();
    $(e.target.closest('.card__favourite')).remove();
  });


});
