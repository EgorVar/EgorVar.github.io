$(document).ready(function(){
  // Переход между подкатегориями
  $('.catalog__menu-wrap ul li').on('click', function(e){
    e.stopPropagation();
    $(this).closest('li').siblings().removeClass('active');
    $(this).closest('li').children('ul').children('li').removeClass('active');
    $(this).closest('li').toggleClass('active');
  });
  // Переход между подкатегориями

  // Закрытие меню каталога
  $(document).on('click', function(e){
    if(!$(e.target.closest('.catalog__menu'))[0]){
      $('.catalog__menu-wrap').removeClass('active');
      $.each($('.catalog__menu-wrap ul').children(), function(index, item){
        $(item).removeClass('active');
      });
    }
  });
  // Закрытие меню каталога

  // Определение пункта с выпадающим меню
  $.each($('.catalog__menu-wrap ul').children(), function(index, item){
    if($(item)[0].children[1]){
      $(item).addClass('dropdown');
    }
  });
  // Определение пункта с выпадающим меню

  // Закрытие и открытие меню
  $('a.catalog__btn').on('click', function(e){
    e.preventDefault();
    $('a.catalog__btn').toggleClass('active');
    $('.catalog__menu-wrap').toggleClass('active');
    $('.btn__navbar').removeClass('active');
  });

  $('.catalog__menu-wrap a.close').on('click', function(e){
    $('.catalog__menu-wrap').removeClass('active');
    $('body').removeClass('body__hidden');
    $('.navbar__menu').removeClass('active');
  });
  // Закрытие и открытие меню
});
