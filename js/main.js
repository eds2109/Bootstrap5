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
      $('#top').fadeOut()
    }
  })

  /* Обработчик срола вверх */
  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 300)
  })

  /* Обработчик для показа Сайдбара по клику */
  $('.sidebar-toggler .btn').click(function () {
    $('.sidebar-toggle').slideToggle()
  })

  /* Magnific Popup Лайтбокс */
  $('.thumbnails').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true,
    },
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          'mfp-figure',
          'mfp-figure mfp-with-anim',
        )
        this.st.mainClass = this.st.el.attr('data-effect')
      },
    },
  })
});
