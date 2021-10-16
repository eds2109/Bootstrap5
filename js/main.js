$(function() {

  /* Кнопка иконка поска в верхней панели */
  $('.open-search').click(function (e) {
    e.preventDefault()
    $('#search').addClass('active')
  })

  $('.close-search').click(function () {
    $('#search').removeClass('active')
  })

  /* Кнопка вверх */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#top').fadeIn()
    } else {
      $('#top').fadeOut();
    }
  });

  /* Обработчик срола вверх */
  $('#top').click(function() {
    $('body, html').animate({scrollTop: 0}, 300);
  });
});
