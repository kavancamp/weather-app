function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");

  if (cityInput.value) {
    city.innerHTML = cityInput.value;
  }
}

let cityButton = document.querySelector("#search-form");
cityButton.addEventListener("click", changeCity);

window.onload = function () {
  let now = new Date();
  let date = now.getDate();
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];

  let today = `Today is ${day}, ${month} ${date}, ${year}`;
  document.getElementById("date").innerHTML = today;
};
