// c50d9de8240f4bb0a7724622222312

$(document).ready(function () {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getCard = (data) => {
    return `
      <div class="col">
        <div class="weather-card card-bg-${randomIntFromInterval(1, 3)}">
          <p class="weather-value" id="weather-value">${
            data.current.condition.text
          }</p>
          <div class="weather-detail-group row justify-content-start align-items-center">
            <div class="temp-group col-md-3">
              <h1 class="temp-value" id="temp-value">${Math.round(
                data.current.temp_c
              )}
                <span class="temp-unit" id="temp-unit">°C</span>
              </h1>
            </div>
            <div class="weather-detail col-md-6">
              <p class="date-value m-0 p-0 mb-2" id="date-value">${
                data.location.localtime
              }</p>
              <p class="location-value m-0 p-0" id="location-value">${
                data.location.name
              }, ${data.location.country}</p>
            </div>
            <div class="col-md-3">
              <img src="${
                data.current.condition.icon
              }" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
  `;
  };

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
        console.log(res)
        if (!res) return swal("", "Country or city not found", "warning");

        swal.close();
        $("#weather-show.weather-show").append(getCard(res));
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
