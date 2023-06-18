function reverseElement() {
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celciusResult = document.getElementById("resultCelcius");

  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celcius = Math.round(((fahrenheit - 32) * 5) / 9);

  celciusResult.value = celcius;
}

function convertTemperature(event) {
  event.preventDefault();

  var fahrenheitInput = document.getElementById("fahrenheit");
  var celciusResult = document.getElementById("resultCelcius");
  var kalkulasiResult = document.getElementById("resultKalkulasi");

  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celcius = Math.round(((fahrenheit - 32) * 5) / 9);
  var kalkulasi = fahrenheit + "°F - 32 * (5 / 9) = " + celcius + "°C";

  celciusResult.value = celcius;
  kalkulasiResult.value = kalkulasi;
}

var form = document.querySelector("form");
form.addEventListener("submit", convertTemperature);
