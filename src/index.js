//import "./styles/main.css";

const W_API_KEY = "88d36c3bc23d2b771a07f19c1af0a6a3";

async function get_todayWeather(city) {
  const api_key =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    W_API_KEY;

  try {
    const response = await fetch(api_key, { mode: "cors" });
    let w_data = await response.json();

    //fetch does not throw error with cod.404
    if (!response.ok) throw new Error("Request failed.");

    print_data(w_data);
  } catch (error) {
    //todo: print data not found in dom
    print_error();
  }
}

function print_data(data) {
  console.log(data);
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
  error.textContent =
    "Error fetching the data... try again with a real city name!";
}

let search_btn = document.getElementById("search");
search_btn.addEventListener("click", () => {
  clean_error();
  let city_input = document.querySelector("input").value;
  get_todayWeather(city_input);
});
