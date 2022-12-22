$(document).ready(function () {
  $('button').click(function () {

    $('.loading-icon').show();
    $(this).attr('disabled', 'disabled');

    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",

      method: "GET",
      dataType: "json",

      success: function (data) {
        setTimeout(function () {
          console.log(data);
          $('.loading-icon').hide();
          $(this).removeAttr('disabled');

          $("img.dog-img").attr("src", data.message);
        }, 1200);
      }

    })

  });
});