const icon = document.getElementById('weather-icon');
const temp = document.getElementById('current-temp');
const caption = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=d046872f11dbe0e60e5a4b369b24d887&units=imperial';

async function apiFetch() {
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

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    caption.textContent = `${desc}`;
}