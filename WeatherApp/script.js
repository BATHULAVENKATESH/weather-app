async function getWeather() {

 const city = document.getElementById("cityInput").value.trim().toLowerCase();
  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "21409083767112438f9abc70f1ef5044"; // Replace with your  API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `

      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>

      <p><strong>Weather:</strong> ${data.weather[0].description}</p>

<p><strong>Humidity:</strong> ${data.main.humidity}%</p>

      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
  }
}
