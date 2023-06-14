const API_KEY = '3c21943603092f7349dec351eb7232be'; // уникальный ключ для работы с сервером
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';//адресс
/* 
Константа которая никогда не измениться принято писать Capslok ом
*/

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherButton.addEventListener('keydown', (e) => { // по кнопке энтер Enter
    console.log(e);
    if (e.code === 'Enter' ) {
        console.log('Мы нажали enter :)');
        
    }
})

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value. trim();
    if (location) {
        const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) =>  {
                console.log(data);
                displayWeather(data);
            })
            .catch(error => {
                console.log(error);
                weatherContainer.innerHTML = 'Failed to fetch weather data';
            });
       
    }
})

function displayWeather(weatherData) { //Функция отвечающая за показ погода
    console.log(weatherData);
    // диструктуризация с 30-41
    const {name, sys:{country}, main, main: {humidity}, weather, wind: {speed}, visibility} = weatherData;

   // const country = sys.country;
    const temperatureC = Math.round(main.temp -273.15);// округление (по закону математики)
    const temperatureMaxC = Math.floor(main.temp_max -273.15); // отбрасывает знаки после запятой
    const temperatureMinC = main.temp_min -273.15.toFixed(1);// сколько знаков после запятой поставить
    const weatherMain = weather[0].main;
    const weatherDescription = weather[0].description;
    // const humidity = main.humidity; //влажность
    //const windSpeed = wind.speed;
    const visibilityDistance = visibility / 1000; // видимость

    //Создаем карточку для отображения инфы о погоде
    const weatherCard = document.createElement('div');

// Добавляем класс для бкдкщей стилизауии
    weatherCard.classList.add('weather-card');

    weatherContainer.innerHTML = ''; //зачистит предыдущее значение

// Помещает контент внутрь созданной карточки
    weatherCard.innerHTML = `
        <h2>${name}, ${country}</h2>
        <p>Temperature: ${temperatureC}</p>
        <p>Max temperature: ${temperatureMaxC}</p>
        <p>Min temperature: ${temperatureMinC}</p>
        <p>Weather: ${weatherMain}</p>
        <p>Description: ${weatherDescription}</p>
        <p>Humidity: ${humidity}</p>
        <p>Wind Speed: ${speed}</p>
        <p>Visibility: ${visibilityDistance} km</p>
    `;

    weatherContainer.append(weatherCard);

    
}