document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "Please your own api you get it in openweathermap.org ";
    const searchBtn = document.getElementById("search-btn");
    const cityInput = document.getElementById("city-input");
    const weatherStatus = document.getElementById("weather-status");

    async function fetchWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            weatherStatus.textContent = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`;
        } catch (error) {
            weatherStatus.textContent = `Error: ${error.message}`;
        }
    }

    searchBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            weatherStatus.textContent = "Please enter a city name.";
        }
    });
});
