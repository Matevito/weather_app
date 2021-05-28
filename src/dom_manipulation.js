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

  function print_data(celsius_data, fahr_data) {
    //clean_appContainer()
    console.log(celsius_data);
    let container = document.getElementById("display_container");
  }
  return { clean_error, print_error, print_data };
})();

export { dom_manipulation };
