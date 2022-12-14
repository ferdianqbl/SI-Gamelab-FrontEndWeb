$(document).ready(function () {

  // click
  $("button.dbl-click-btn").dblclick(function () {
    $(".dbl-click p").css("color", "blue");
  });

  // dbl-click
  $("button.click-btn").click(function () {
    $(".dbl-click p").css("background-color", "orange");
  });

  // mouseenter
  $("button.mouseenter-btn").mouseenter(function () {
    $(".mouseenter p").css("color", "red");
  });

  // mouseleave
  $("button.mouseenter-btn").mouseleave(function () {
    $(".mouseenter p").css("color", "blue");
  });

  // keydown
  $("input.keydown-input").keydown(function () {
    $(".keydown p").css("color", "red");
  });

  // keyup
  $("input.keydown-input").keyup(function () {
    $(".keydown p").css("color", "blue");
  });

});