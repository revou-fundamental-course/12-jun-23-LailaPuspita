// script-ctof.js

function reverseElement() {
  var celciusInput = document.getElementById("celcius");
  var fahrenheitResult = document.getElementById("resultFahrenheit");

  var celcius = parseFloat(celciusInput.value);
  var fahrenheit = Math.round((celcius * 9) / 5 + 32);

  fahrenheitResult.value = fahrenheit;
}

function convertTemperature(event) {
  event.preventDefault();

  var celciusInput = document.getElementById("celcius");
  var fahrenheitResult = document.getElementById("resultFahrenheit");
  var kalkulasiResult = document.getElementById("resultKalkulasi");

  var celcius = parseFloat(celciusInput.value);
  var fahrenheit = Math.round((celcius * 9) / 5 + 32);
  var kalkulasi = celcius + "°C * (9 / 5) + 32 = " + fahrenheit + "°F";

  fahrenheitResult.value = fahrenheit;
  kalkulasiResult.value = kalkulasi;
}

var form = document.querySelector("form");
form.addEventListener("submit", convertTemperature);
