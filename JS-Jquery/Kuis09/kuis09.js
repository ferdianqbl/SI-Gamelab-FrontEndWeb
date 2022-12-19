$(document).ready(function () {

  // click
  $("button.dbl-click-btn").dblclick(function () {
    $(".dbl-click p").addClass('bgblue');
  });

  // dbl-click
  $("button.click-btn").click(function () {
    $(".dbl-click p").removeClass("yellow").addClass('green');
  });

  // box2
  $('button.btn1').click(function () {
    $('.box2').append('<p class="tambahan">Tambahan</p>');
  });

  // box2
  $('button.btn3').click(function () {
    $('.box2 p.tambahan').remove();
  });

  // box2
  $('button.btn2').click(function () {
    $('.box2 a').attr('href', 'https://www.google.com');
  });

});