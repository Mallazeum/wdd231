const apiKey = '3faa4bc66643d960121999f19e150201';
const lat = 16.77;
const lon = -3.00;

const icon = document.getElementById('weather-icon');
const temp = document.getElementById('current-temp');
const high = document.getElementById('high');
const low = document.getElementById('low');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const caption = document.querySelector('figcaption');

const forecast = document.getElementById('today');

async function apiFetch() {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

function formatUnixTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString('en-US', { timeZone: 'Africa/Bamako', hour: 'numeric', minute: '2-digit', hour12: true });
}

apiFetch();

// current weather

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;

    high.innerHTML = `High: ${data.main.temp_max}&deg;F`;

    low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;

    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    let sunriseTime = formatUnixTimestamp(data.sys.sunrise);
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;

    let sunsetTime = formatUnixTimestamp(data.sys.sunset);
    sunset.innerHTML = `Sunset: ${sunsetTime}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    caption.textContent = `${desc}`;
}

// Forecast Function
getForecast();

async function getForecast() {
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=imperial`;
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

function displayForecast(data) {
    const info = document.createElement('p');
    let today = 'Today';
    info.textContent = today.padEnd(10) + `Current Temperature: ${temp.textContent}`
    forecast.appendChild(info);
    data.list.forEach(day => {
        const info = document.createElement('p');
        const date = new Date(day.dt * 1000).toLocaleString('en-US', { weekday: 'long'});
        let tempMin = day.temp.min;
        let tempMax = day.temp.max;
        info.innerHTML = date.padEnd(10) + `Low: ${tempMin}&deg;F  |  High: ${tempMax}&deg;F`;
        forecast.appendChild(info);
    });
}