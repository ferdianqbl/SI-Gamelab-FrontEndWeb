$(document).ready(function () {
  $("button").click(function () {
    let country = $("input").val().toLowerCase();
    swal({
      title: "",
      text: "Loading...",
      icon: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
      button: false,
    });
    if (!country) {
      return swal("", "Please enter a country name", "warning");
    }
    $.ajax({
      url: "http://universities.hipolabs.com/search",
      type: "GET",
      data: {
        country,
      },

      success: function (results) {
        if (results.length < 1) {
          return swal("", "Country not found", "warning");
        }

        swal.close();
        let html = "";
        let no = 1;

        results.forEach((univ) => {
          html += `
                <tr>
                    <td>${no++}</td>
                    <td>${univ.name}</td>
                    <td><a href="${univ.web_pages}" target="__blank">${
            univ.web_pages
          }</a></td>
                </tr>
                `;
        });

        $("#univ").html(html);
      },
    });
  });
});
