$(document).ready(function(){
  $('.btn__move-up').on('click', function(){
    $('body, html').animate({scrollTop: 0}, 500);
  });
  //open catalog

  openNavbar();
  // Открытие и закрытие меню навигации в мобильной версии

  viewAddit();
  // Открытие дополнительной информации о доставке на мобильных


  addBox();
  // Добавить в корзину, избранное, сравнение

  openModal();
  // Открытие модальных окон


  changeGridListing();
  // Смена в листинге с отображения карточек с плиток на список


  mobileHeader();
  // Открытие поля обратный звонок


  itemClose();
  // Удаление товаров из корзины, избранного и сравнения


  changeDescription();
  // Смена слайдов в секции описания



  changeCatalog();
  // Смена слайдов в секции описания


  checkoutRegistr();
  // Смена слайдов в секции описания


  $('.btn__arrow').on('click', function(e){
    e.preventDefault();
  });

  $('body').removeClass('body__hidden');
  $('.preloader').removeClass('active');


});


function mobileHeader(){
  $('#header__number').on('click', function(e){
    e.preventDefault();
    $('#header__number').addClass('active');
    if($('body').width() <= 1000){
      $('.modal__wrap').removeClass('active');
      $('.modal__phone').addClass('active');
      $('body').addClass('body__hidden');
    }
  });

  $('.modal__phone a.close').on('click', function(){
    $('.modal__phone').removeClass('active');
    $('#header__number').removeClass('active');
    $('body').removeClass('body__hidden');
  });

}

function itemClose(){
  $('.product__box-wrap .item a.close').on('click', function(e) {
    e.preventDefault();
    $(e.target.closest('.item')).remove();
  });
}


function viewAddit(){
  $('.card__additionally .item').on('click', function(e){
    $(e.target.closest('.item').children[1]).toggleClass('active');
  });
}

function addBox(){
  $('.product__buttons a').on('click', function(e){
    e.preventDefault();
    $(e.target.closest('a')).toggleClass('active');
  })

  // product add in box


  $('.card__btn-top__item a').on('click', function(e){
    e.preventDefault();
    $(e.target.closest('a').children[0]).toggleClass('active');
  });

  // catalog add in box

  function updateCount(){
    $.each($('.header__btn .btn__icons-count'), function(index, item){
      if(item.innerText == '' || item.innerText == 0){
        $(item).css({'display':'none'});
      }
    });
  }

  updateCount();


  $('.header__btn .btn__icons-count').bind('DOMSubtreeModified', function(){
    updateCount();
    console.log('work');
  });

}

function checkoutRegistr(){
  $('.checkout__form-change__item input[name="registration"]').on('click', function(e){
    let change = $(e.target).attr('value');
    if( change == 'yes'){
      if($('.checkout__form-registration').children().length == 0){
        $('.checkout__form-registration').append(`
          <div class="input__wrap">
            <label for="">Email</label>
            <input name="email" type="email" placeholder="example@mail.com">
          </div>
          <div class="input__wrap">
            <label for="">Пароль</label>
            <input name="password" type="text" placeholder="Пароль">
          </div>
          <div class="input__wrap">
            <label for="">Подтвердите пароль</label>
            <input name="confirmPassword" type="text" placeholder="Подтвердите пароль">
          </div>
          <div class="input__wrap">
            <label for="">Телефон</label>
            <input name="number" type="text" placeholder="8 888 888 88 88">
          </div>
        `);
      }
    }else{
      $('.checkout__form-registration .input__wrap').remove();
    }
  });
}


function changeCatalog(){
  $('.catalog__category a').on('click', function(e){
    e.preventDefault();
    let slidersItem = $(e.target.closest('a')).data('item');
    $('.catalog .sliders').children().removeClass('active');
    $('.catalog__category a').removeClass('active');
    $(e.target.closest('a')).addClass('active');
    $.each($('.catalog .sliders').children(), function(index, item){
      if($(item).attr('id') == slidersItem){
        $(item).addClass('active');
      }
    });
  });
}



function openModal(){
  $('#sign_in').on('click',function(e){
    e.preventDefault()
    $('.modal__wrap').removeClass('active');
    $('.modal__sign-in').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })

  $('#search').on('click',function(e){
    e.preventDefault()
    $('.modal__wrap').removeClass('active');
    $('.modal__search-mobile').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })
  $('#link__register').on('click',function(e){
    e.preventDefault()
    $('.modal__wrap').removeClass('active');
    $('.modal__sign-up').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })

  $('.modal a.close').on('click', function(e){
    e.preventDefault();
    $('#header__number').removeClass('active');
    $('.modal__phone').removeClass('active');
    $('.modal__wrap').removeClass('active');
    $('body').removeClass('body__hidden');
  })
}





function openNavbar(){
  $('.btn__navbar').on('click', function(e){
    if(e.target.closest('.btn__navbar').classList[1] !== 'active'){
      $('.btn__navbar').addClass('active');
      $('.navbar__menu').addClass('active');
      $('body').addClass('body__hidden');
    }else{
      $('.btn__navbar').removeClass('active');
      $('.navbar__menu').removeClass('active');
      $('body').removeClass('body__hidden');
    }
  });

  $('.btn__setting').on('click', function(){
    $('.settings__wrap-mobile').addClass('active');
    $('body').addClass('body__hidden');
  });

  $('.wrap__header-setting a.close').on('click', function(){
    $('.settings__wrap-mobile').removeClass('active');
    $('body').removeClass('body__hidden');
  });

}

function changeDescription(){
  $('.desc__btn > .arrow__prev').on('click',changeDesc);

  $('.desc__btn > .arrow__next').on('click',changeDesc);


  function changeDesc(e){
    e.preventDefault();
    $('.description__item').toggleClass('description__item-active');
    $('.desc__dots > div').toggleClass('active');
  }
}

function changeGridListing(){
  $('a#square').on('click', function(e){
    e.preventDefault();
    $('.listing .products__inner').removeClass('list');
    $('a#square').addClass('active');
    $('a#list').removeClass('active');
  });
  $('a#list').on('click', function(e){
    e.preventDefault();
    $('.listing .products__inner').addClass('list');
    $('a#square').removeClass('active');
    $('a#list').addClass('active');
  });
}
