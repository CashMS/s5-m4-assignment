async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here

  let link = '';

  const curTempDiv = document.querySelector('#apparentTemp');
  const currTemp = curTempDiv.children[1];

  const currentEmoji = document.querySelector('#todayDescription');

  const todayStatsDiv = document.querySelector('#todayStats');
  const todayTemps = todayStatsDiv.children[0];
  const todayPrec = todayStatsDiv.children[1];
  const todayHumid = todayStatsDiv.children[2];
  const todayWind = todayStatsDiv.children[3];

  const forecastDiv = document.querySelector('#forecast');

  const firstDay = forecastDiv.children[0];
  const firstName = firstDay.children[0];
  const firstEmoji = firstDay.children[1];
  const firstTemps = firstDay.children[2];
  const firstPrec = firstDay.children[3];

  const secondDay = forecastDiv.children[1];
  const secondName = secondDay.children[0];
  const secondEmoji = secondDay.children[1];
  const secondTemps = secondDay.children[2];
  const secondPrec = secondDay.children[3];

  const thirdDay = forecastDiv.children[2];
  const thirdName = thirdDay.children[0];
  const thirdEmoji = thirdDay.children[1];
  const thirdTemps = thirdDay.children[2];
  const thirdPrec = thirdDay.children[3];

  const locationDiv = document.querySelector('#location');
  const location = locationDiv.children[0];

  const widgDiv = document.querySelector('#weatherWidget');
  widgDiv.style.display = 'none';

  const dropDown = document.querySelector('#citySelect');
  let lastSel = dropDown.value

  dropDown.addEventListener('change', (e) => {
    const selected = e.currentTarget;
    const current = selected.value;

    if (current !== lastSel) {
      widgDiv.style.display = 'none';
    }

    selected.setAttribute('disabled', 'disabled');

    const info = document.querySelector('.info');
    info.textContent = 'Fetching weather data...';

    lastSel = current;

    if (e.target.value === 'San Francisco') {
      link = 'http://localhost:3003/api/weather';
    } else if (e.target.value === 'New York') {
      link = 'http://localhost:3003/api/weather?city=New+York';
    } else if (e.target.value === 'Detroit') {
      link = 'http://localhost:3003/api/weather?city=Detroit';
    } else if (e.target.value === 'Honolulu') {
      link = 'http://localhost:3003/api/weather?city=Honolulu';
    }

    axios.get(link)
      .then(res => {
        const data = res.data;

        info.textContent = '';
        widgDiv.style.display = 'block';
        selected.removeAttribute('disabled');

        location.textContent = e.target.value;

        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const firstStr = data.forecast.daily[0].date;
        const firstNew = new Date(firstStr);
        const firstIndex = firstNew.getDay();
        const firstDate = dayNames[firstIndex + 1];

        const secondStr = data.forecast.daily[1].date;
        const secondNew = new Date(secondStr);
        const secondIndex = secondNew.getDay();
        const secondDate = dayNames[secondIndex + 1];

        const thirdStr = data.forecast.daily[2].date;
        const thirdNew = new Date(thirdStr);
        const thirdIndex = thirdNew.getDay();
        const thirdDate = dayNames[thirdIndex + 1];

        if (data.current.weather_description === 'Sunny') {
          currentEmoji.textContent = descriptions[0][1];
        } else if (data.current.weather_description === 'Cloudy') {
          currentEmoji.textContent = descriptions[1][1];
        } else if (data.current.weather_description === 'Rainy') {
          currentEmoji.textContent = descriptions[2][1];
        } else if (data.current.weather_description === 'Thunderstorm') {
          currentEmoji.textContent = descriptions[3][1];
        } else if (data.current.weather_description === 'Snowy') {
          currentEmoji.textContent = descriptions[4][1];
        } else if (data.current.weather_description === 'Partly Cloudy') {
          currentEmoji.textContent = descriptions[5][1];
        }
        currTemp.textContent = `${data.current.apparent_temperature}°`;
        todayTemps.textContent = `${data.current.temperature_min}°/${data.current.temperature_max}°`;
        todayPrec.textContent = `Precipitation: ${data.current.precipitation_probability * 100}%`;
        todayHumid.textContent = `Humidity: ${data.current.humidity}%`;
        todayWind.textContent = `Wind: ${data.current.wind_speed}m/s`;

        if (data.forecast.daily[0].weather_description === 'Sunny') {
          firstEmoji.textContent = descriptions[0][1];
        } else if (data.forecast.daily[0].weather_description === 'Cloudy') {
          firstEmoji.textContent = descriptions[1][1];
        } else if (data.forecast.daily[0].weather_description === 'Rainy') {
          firstEmoji.textContent = descriptions[2][1];
        } else if (data.forecast.daily[0].weather_description === 'Thunderstorm') {
          firstEmoji.textContent = descriptions[3][1];
        } else if (data.forecast.daily[0].weather_description === 'Snowy') {
          firstEmoji.textContent = descriptions[4][1];
        } else if (data.forecast.daily[0].weather_description === 'Partly Cloudy') {
          firstEmoji.textContent = descriptions[5][1];
        }
        firstTemps.textContent = `${data.forecast.daily[0].temperature_min}°/${data.forecast.daily[0].temperature_max}°`;
        firstPrec.textContent = `Precipitation: ${data.forecast.daily[0].precipitation_probability * 100}%`;
        firstName.textContent = firstDate;

        if (data.forecast.daily[1].weather_description === 'Sunny') {
          secondEmoji.textContent = descriptions[0][1];
        } else if (data.forecast.daily[1].weather_description === 'Cloudy') {
          secondEmoji.textContent = descriptions[1][1];
        } else if (data.forecast.daily[1].weather_description === 'Rainy') {
          secondEmoji.textContent = descriptions[2][1];
        } else if (data.forecast.daily[1].weather_description === 'Thunderstorm') {
          secondEmoji.textContent = descriptions[3][1];
        } else if (data.forecast.daily[1].weather_description === 'Snowy') {
          secondEmoji.textContent = descriptions[4][1];
        } else if (data.forecast.daily[1].weather_description === 'Partly Cloudy') {
          secondEmoji.textContent = descriptions[5][1];
        }
        secondTemps.textContent = `${data.forecast.daily[1].temperature_min}°/${data.forecast.daily[1].temperature_max}°`;
        secondPrec.textContent = `Precipitation: ${data.forecast.daily[1].precipitation_probability * 100}%`;
        secondName.textContent = secondDate;

        if (data.forecast.daily[2].weather_description === 'Sunny') {
          thirdEmoji.textContent = descriptions[0][1];
        } else if (data.forecast.daily[2].weather_description === 'Cloudy') {
          thirdEmoji.textContent = descriptions[1][1];
        } else if (data.forecast.daily[2].weather_description === 'Rainy') {
          thirdEmoji.textContent = descriptions[2][1];
        } else if (data.forecast.daily[2].weather_description === 'Thunderstorm') {
          thirdEmoji.textContent = descriptions[3][1];
        } else if (data.forecast.daily[2].weather_description === 'Snowy') {
          thirdEmoji.textContent = descriptions[4][1];
        } else if (data.forecast.daily[2].weather_description === 'Partly Cloudy') {
          thirdEmoji.textContent = descriptions[5][1];
        }
        thirdTemps.textContent = `${data.forecast.daily[2].temperature_min}°/${data.forecast.daily[2].temperature_max}°`;
        thirdPrec.textContent = `Precipitation: ${data.forecast.daily[2].precipitation_probability * 100}%`;
        thirdName.textContent = thirdDate;
      })
      .catch(err => {
        console.log(err.message);
      })
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
