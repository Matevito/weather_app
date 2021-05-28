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
    let container = document.getElementById("app_container");

    let new_app = document.createElement("div");
    new_app.setAttribute("id", "display_container");
    let app = document.getElementById("display_container");

    container.removeChild(app);
    container.appendChild(new_app);
  }

  function build_app(celsius_data, fahr_data) {
    clean_appContainer();
    let container = document.getElementById("display_container");
    let c_app = display_info(celsius_data);
    let f_app = display_info(fahr_data);

    container.appendChild(c_app);
  }

  function display_info(data) {
    let app_container = document.createElement("div");

    let flag = document.createElement("img");
    flag.src = "http://satyr.io/80x60?flag=" + data.sys.country;

    let city_name = document.createElement("h1");
    city_name.textContent = data.name + " ," + data.sys.country;

    let temperature = document.createElement("span");
    temperature.textContent = data.main.temp + "°";

    let w_description_container = document.createElement("span");
    let w_type = document.createElement("p");
    w_type.textContent = data.weather[0].main;
    let w_description = document.createElement("p");
    w_description.textContent = data.weather[0].description;
    w_description_container.appendChild(w_type);
    w_description_container.appendChild(w_description);

    let feelsLike_info = data.main.feels_like;
    let humidity_info = data.main.humidity + "%";
    let pressure = data.main.pressure + "mb";
    let maxTemp_info = data.main.temp_max + "°";
    let minTemp_info = data.main.temp_min + "°";

    app_container.appendChild(flag);
    app_container.appendChild(city_name);
    app_container.appendChild(temperature);
    app_container.appendChild(w_description_container);
    return app_container;
  }

  return { clean_error, print_error, build_app };
})();

export { dom_manipulation };
