// document.addEventListener("DOMContentLoaded", function (event) {
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeBtn = document.querySelector('.modal__close');
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible');
//     }
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);

//     });

//     closeBtn.addEventListener('click', switchModal);

// });

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 30 + bullets.width() + 30)
  bullets.css('left', prev.width() + 30)

  new WOW().init();


  //  Валидация формы modal
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 1,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // праивило-объект
      userEmail: {
        required: true,
        email: true,
      },
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Слишком длинное имя. Оно должно быть не более 15 символов",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Заполните данное поле полностью",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      }
    }

  });

  // маска для номера телефона
  $('[type=tel]').mask('+7(000)00-00-000', {placeholder: "+7(__) __-__-___"});


//  Валидация формы control
$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 1,
    },
    userPhone: {
      required: true,
      minlength: 16,
    },
  }, //сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя должно быть не короче двух букв",
      maxlength: "Слишком длинное имя. Оно должно быть не более 15 символов",
    },
    userPhone: {
      required: "Заполните поле",
      minlength: "Заполните данное поле полностью",
    }
  }

});

//  Валидация формы footer
$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 1,
    },
    userPhone: {
      required: true,
      minlength: 16,
    },
    // праивило-объект
    userQuestion: {
      required: true
    },
  }, //сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя должно быть не короче двух букв",
      maxlength: "Слишком длинное имя. Оно должно быть не более 15 символов",
    },
    userPhone: {
      required: "Заполните поле",
      minlength: "Заполните данное поле полностью",
    },
    userQuestion: {
      required: "Заполните поле",
    }
  }

});


});