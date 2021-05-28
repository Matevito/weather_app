import { dom_manipulation } from "./dom_manipulation";

const W_API_KEY = "88d36c3bc23d2b771a07f19c1af0a6a3";

async function get_todayWeather(city) {
  const c_key =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    W_API_KEY;
  const f_key =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    W_API_KEY;

  try {
    dom_manipulation.clean_error();

    //fetch data. if it fails throw and error with cod.404
    let c_response = await fetch(c_key, { mode: "cors" });
    if (!c_response.ok) throw new Error("Request failed.");
    let f_response = await fetch(f_key, { mode: "cors" });
    if (!f_response.ok) throw new Error("Request failed.");

    let Cw_data = await c_response.json();
    let fw_data = await f_response.json();
    dom_manipulation.build_app(Cw_data, fw_data);
  } catch (error) {
    dom_manipulation.print_error();
  }
}

export { get_todayWeather };
