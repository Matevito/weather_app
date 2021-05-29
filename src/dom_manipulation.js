const dom_manipulation = (() => {
  function clean_error() {
    let error = document.getElementById("error");
    error.textContent = "";
  }
  function print_error() {
    let error = document.getElementById("error");
    error.textContent = "An error happened. Try with a real city";
  }

  function build_app(celsius_data, fahr_data) {
    let change_unit = document.getElementById("temperature_unit");
    //handless a possible bugg after loading multiple location
    change_unit.textContent = "F°";

    display_info(celsius_data);

    change_unit.addEventListener("click", () => {
      if (change_unit.textContent === "F°") {
        display_info(fahr_data);
        change_unit.textContent = "C°";
      } else {
        display_info(celsius_data);
        change_unit.textContent = "F°";
      }
    });
  }

  function display_info(data) {
    let dom_cityName = document.getElementById("city_name");
    dom_cityName.textContent = data.name + " ," + data.sys.country;

    let dom_flag = document.getElementById("flag");
    dom_flag.src = "http://satyr.io/80x60?flag=" + data.sys.country;

    let dom_temperature = document.getElementById("temperature");
    dom_temperature.textContent = data.main.temp + "°";

    let dom_weatherType = document.getElementById("weather_type");
    dom_weatherType.textContent = data.weather[0].main;

    let dom_weatherDescrip = document.getElementById("weather_description");
    dom_weatherDescrip.textContent = data.weather[0].description;

    let dom_feelsLike = document.getElementById("feels_like");
    dom_feelsLike.textContent = "Feels like: " + data.main.feels_like + "°";

    let dom_humidity = document.getElementById("humidity");
    dom_humidity.textContent = "Humidity: " + data.main.humidity + "%";

    let dom_preassure = document.getElementById("preassure");
    dom_preassure.textContent = "Preassure: " + data.main.pressure + "mb";

    let dom_maxTemp = document.getElementById("max_temp");
    dom_maxTemp.textContent = "Max. temp: " + data.main.temp_max + "°";

    let dom_minTemp = document.getElementById("min_temp");
    dom_minTemp.textContent = "Min. temp: " + data.main.temp_min + "°";

    let container = document.getElementById("display_container");
    container.style.visibility = "visible";
  }

  return { clean_error, print_error, build_app };
})();

export { dom_manipulation };
