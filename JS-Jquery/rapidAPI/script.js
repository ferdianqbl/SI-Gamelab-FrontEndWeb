// key = d629455f74msh437141bc1ac294bp198d58jsn681df0fddbd6

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
      url: "https://covid-193.p.rapidapi.com/statistics",
      method: "GET",
      data: {
        country,
      },
      headers: {
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        "X-RapidAPI-Key": "d629455f74msh437141bc1ac294bp198d58jsn681df0fddbd6",
      },

      success: (res) => {
        console.log(res);

        if (res.results === 0) {
          return swal("", "Country not found", "warning");
        }

        swal.close();
        let data = res.response[0].cases;

        $(".active-case").text(data.active.toLocaleString("en-US"));
        $(".critical-case").text(data.critical.toLocaleString("en-US"));
        $(".new-case").text(data.new.toLocaleString("en-US"));
        $(".recovered").text(data.recovered.toLocaleString("en-US"));

        $(".nama-negara").text(res.response[0].country);

        $(".card-statistik").show();
      },
      error: (err) => {
        console.log(err);
      },
    });
  });
});
