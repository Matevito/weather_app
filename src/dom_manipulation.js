const dom_manipulation = (() => {
  function clean_error() {
    let error = document.getElementById("error");
    error.textContent = "";
  }
  function print_error() {
    let error = document.getElementById("error");
    error.textContent = "An error happened. Try with a real city";
  }

  function clean_appContainer() {
    //todo: erase this if not needed
    let container = document.getElementById("app_container");
    let new_app = document.createElement("div");
    new_app.setAttribute("id", "display_container");
    let app = document.getElementById("display_container");
    container.removeChild(app);
    container.appendChild(new_app);
  }

  function build_app(celsius_data, fahr_data) {
    let container = document.getElementById("display_container");
    let c_app = display_info(celsius_data);
    let f_app = display_info(fahr_data);
  }

  function display_info(data) {
    let flag_url = "http://satyr.io/80x60?flag=" + data.sys.country;
    let city_name = data.name + " ," + data.sys.country;
    let temperature = data.main.temp + "°";
    let weather_type = data.weather[0].main;
    let weather_description = data.weather[0].description;
    let feelsLike_info = data.main.feels_like;
    let humidity_info = data.main.humidity + "%";
    let pressure = data.main.pressure + "mb";
    let maxTemp_info = data.main.temp_max + "°";
    let minTemp_info = data.main.temp_min + "°";
  }

  return { clean_error, print_error, build_app };
})();

export { dom_manipulation };
