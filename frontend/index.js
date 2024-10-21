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

  console.log(descriptions);

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

  const widgDiv = document.querySelector('#weatherWidget');
  widgDiv.style.display = 'none';

  const dropDown = document.querySelector('#citySelect');
  let lastSel = dropDown.value

  dropDown.addEventListener('change', (e) => {
    const selected = e.currentTarget;
    const current = selected.value;
    console.log(e.target.value);

    if (current !== lastSel) {
      widgDiv.style.display = 'none';
      console.log('hiding');
    }

    selected.setAttribute('disabled', 'disabled');

    const info = document.querySelector('.info');
    info.textContent = 'Fetching weather data...';

    lastSel = current;

    if (e.target.value === 'San Francisco') {
      link = 'http://localhost:3003/api/weather';
      console.log(link);
    } else if (e.target.value === 'New York') {
      link = 'http://localhost:3003/api/weather?city=New+York';
      console.log(link);
    } else if (e.target.value === 'Detroit') {
      link = 'http://localhost:3003/api/weather?city=Detroit';
      console.log(link);
    } else if (e.target.value === 'Honolulu') {
      link = 'http://localhost:3003/api/weather?city=Honolulu';
      console.log(link);
    }

    //°
    
    // let descriptions = [
    //   ["Sunny", "☀️"],
    //   ["Cloudy", "☁️"],
    //   ["Rainy", "🌧️"],
    //   ["Thunderstorm", "⛈️"],
    //   ["Snowy", "❄️"],
    //   ["Partly Cloudy", "⛅️"]
    // ]

    axios.get(link)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        console.log(data.forecast.daily[0].weather_description)

        info.textContent = '';
        widgDiv.style.display = 'block';
        selected.removeAttribute('disabled');

        currTemp.textContent = `${data.current.apparent_temperature}°`
        
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

        // if (data.forecast.daily.weather_description === 'Sunny') {
        //   currentEmoji.textContent = descriptions[0][1];
        // } else if (data.current.weather_description === 'Cloudy') {
        //   currentEmoji.textContent = descriptions[1][1];
        // } else if (data.current.weather_description === 'Rainy') {
        //   currentEmoji.textContent = descriptions[2][1];
        // } else if (data.current.weather_description === 'Thunderstorm') {
        //   currentEmoji.textContent = descriptions[3][1];
        // } else if (data.current.weather_description === 'Snowy') {
        //   currentEmoji.textContent = descriptions[4][1];
        // } else if (data.current.weather_description === 'Partly Cloudy') {
        //   currentEmoji.textContent = descriptions[5][1];
        // }

        todayTemps.textContent = `${data.current.temperature_min}°/${data.current.temperature_max}°`;
        todayPrec.textContent = `Precipitation: ${data.current.precipitation_probability * 100}%`;
        todayHumid.textContent = `Humidity: ${data.current.humidity}%`;
        todayWind.textContent = `Wind: ${data.current.wind_speed}m/s`;


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
