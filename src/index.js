import "./main.css";
import { get_todayWeather } from "./w_apis";

/*todo:
let gps_btn = document.getElementById("gps");
*/

let search_btn = document.getElementById("search");
search_btn.addEventListener("click", () => {
  let city_input = document.querySelector("input").value;
  get_todayWeather(city_input);
});
