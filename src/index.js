//import "./styles/main.css";

const W_API_KEY = "88d36c3bc23d2b771a07f19c1af0a6a3";

async function get_todayWeather(city) {
  const c_api_key =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    W_API_KEY;
  const f_api_key =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    W_API_KEY;

  try {
    let c_response = await fetch(c_api_key, { mode: "cors" });
    //fetch does not throw error with cod.404
    if (!c_response.ok) throw new Error("Request failed.");
    let f_response = await fetch(f_api_key, { mode: "cors" });
    if (!f_response.ok) throw new Error("Request failed.");

    let Cw_data = await c_response.json();
    let fw_data = await f_response.json();
    clean_error();

    //TODO pUT IT LIKE PROMISE ALL
    print_data(Cw_data);
  } catch (error) {
    print_error();
  }
}

function print_data(data) {
  console.log(data);
  let container = document.getElementById("display_container");
}

/*todo:
let gps_btn = document.getElementById("gps");
*/
function clean_error() {
  let error = document.getElementById("error");
  error.textContent = "";
}
function print_error() {
  let error = document.getElementById("error");
  error.textContent = "An error happened. Try with a real city";
}

let search_btn = document.getElementById("search");
search_btn.addEventListener("click", () => {
  let city_input = document.querySelector("input").value;
  get_todayWeather(city_input);
});
