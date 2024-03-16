window.onload = function() {
    fetchWeatherForecast();
  };
  
  async function fetchWeatherForecast() {
    try {
      const response = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
      const data = await response.json();
      const weatherForecast = data.dataseries; // Adjust this based on the API response structure
  
      const weatherContainer = document.getElementById('weather-container');
      weatherForecast.forEach(day => {
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');
        weatherCard.innerHTML = `
          <h2>${day.date}</h2>
          <img class="weather-icon" src="${getWeatherIcon(day.weather)}" alt="${day.weather}">
          <p>Temperature: ${day.temp2m}°C</p>
          <p>Conditions: ${day.weather}</p>
        `;
        weatherContainer.appendChild(weatherCard);
      });
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  }
  
  function getWeatherIcon(weatherCondition) {
    // Return appropriate weather icon URL based on the weather condition
    // Example: return 'sun-icon.png' for sunny weather, 'cloud-icon.png' for cloudy weather, etc.
  }
  