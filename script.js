let weatherIcon = document.querySelector(".weather-icon");

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  // 🔴 LOCAL TESTING (Works on your computer, but exposes API key)
  // const apiKey = "75584d34a9d6a57fe820bb8bc8bf187d";
  // const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  
  // 🟢 VERCEL DEPLOYMENT (Use this before deploying to hide API key)
  const fetchUrl = `/api/weather?city=${city}`;

  const response = await fetch(fetchUrl);

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "weather-img/images/clouds.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "weather-img/images/clear.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "weather-img/images/rain.jpg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "weather-img/images/mist.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "weather-img/images/drizzle.jpg";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "weather-img/images/snow.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
