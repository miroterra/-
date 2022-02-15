/* nav  */
$('.tit .btn').click(function (e) {
  e.preventDefault();
  // $('#cont_nav').css('display', 'block');
  // $('#cont_nav').show();
  // $('#cont_nav').fadeIn();
  // $('#cont_nav').slideDown();
  // $('#cont_nav').toggle();
  // $('#cont_nav').fadeToggle();
  $('#cont_nav').slideToggle(200);
  $(this).toggleClass('on');
});

/* banner slide */
