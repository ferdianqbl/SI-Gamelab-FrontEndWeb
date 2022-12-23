// c50d9de8240f4bb0a7724622222312

$(document).ready(function () {
  //   const getCard = (data) => {
  //     return `
  //     <div class="weather-card">
  //     <div class="weather-card">
  // `;
  //   };

  const getData = (name) => {
    $.ajax({
      url: `http://api.weatherapi.com/v1/current.json`,
      method: "GET",
      headers: {
        key: "c50d9de8240f4bb0a7724622222312",
      },
      data: {
        q: name,
      },
      success: (res) => {
        console.log(res);
        swal.close();
        // $("#weather-show.weather-show").append();
      },

      error: (err) => {
        return swal("", "Country or city not found", "warning");
      },
    });
  };

  $(".search-btn#search-btn").click(function () {
    {
      let city = $("#city-name").val().toLowerCase();
      swal({
        title: "",
        text: "Fetching data...",
        icon: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
        button: false,
      });
      if (!city)
        return swal("", "Please enter a country or city name", "warning");

      getData(city);
    }
  });
});
