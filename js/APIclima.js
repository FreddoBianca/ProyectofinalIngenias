document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    const apiKey = '80df7e4f26e9e9704bc6c209fce26851'; // Reemplaza con tu propia API Key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                const description = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                weatherInfo.innerHTML = `
                    <h2>El clima en ${city}:</h2>
                    <p>Descripción: ${description}</p>
                    <p>Temperatura: ${temperature}°C</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del viento: ${windSpeed} m/s</p>
                `;
            } else {
                weatherInfo.innerHTML = 'No se encontraron datos para esta ciudad.';
            }
        })
        .catch(error => {
            console.error('Error al obtener datos meteorológicos:', error);
        });
}