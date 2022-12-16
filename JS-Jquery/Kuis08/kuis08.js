$(document).ready(function () {

  // click
  $("button.dbl-click-btn").dblclick(function () {
    $(".dbl-click p").fadeToggle(1000);
  });

  // dbl-click
  $("button.click-btn").click(function () {
    $(".dbl-click p").slideToggle(1000);
  });

  // mouseenter
  $("button.mouseenter-btn").mouseenter(function () {
    $(".mouseenter p").hide(1000);
  });

  // mouseleave
  $("button.mouseenter-btn").mouseleave(function () {
    $(".mouseenter p").show(1000);
  });

  // keydown
  $("input.keydown-input").keydown(function () {
    $(".keydown p").animate({
      padding: "36px",
    });
  });

  // keyup
  $("input.keydown-input").keyup(function () {
    $(".keydown p").animate({
      padding: "16px",
    });
  });

});