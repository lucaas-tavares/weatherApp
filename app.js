const apiKey = 'YOUR_API_KEY'; //Substitua aqui pela sua api kei fornecida pelo openweathermap
const locButton = document.querySelector('.loc-button');
const todayInfo = document.querySelector('.today-info');
const todayWeatherIcon = document.querySelector('.today-weather i');
const todayTemp = document.querySelector('.weather-temp');
const daysList = document.querySelector('.days-list');


const weatherIconMap = {
    '01d':'sun',
    '01n':'moon',
    '02d':'sun',
    '02n':'moon',
    '03d':'cloud',
    '03n':'cloud',
    '04d':'cloud',
    '04n':'cloud',
    '09d':'cloud-rain',
    '09n':'cloud-rain',
    '10d':'cloud-rain',
    '10n':'cloud-rain',
    '11d':'cloud-lightning',
    '11n':'cloud-lightning',
    '13d':'cloud-snow',
    '13n':'cloud-snow',
    '50d':'water',
    '50n':'water'
}

function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric&lang=pt`;

    fetch(apiUrl).then(response => response.json()).then(data =>{

        const todayWeather = data.list[0].weather[0].description;
        const todayTemperature = `${Math.round(data.list[0].main.temp)}°C`;
        const todayWeatherIconCode = data.list[0].weather[0].icon;

        todayInfo.querySelector('h2').textContent = new Date().toLocaleDateString('pt-br', { weekday: 'long' });
        todayInfo.querySelector('span').textContent = new Date().toLocaleDateString('pt-br', { day: 'numeric', month: 'long', year:'numeric' });
        todayWeatherIcon.className = `bx bx-${weatherIconMap[todayWeatherIconCode]}`;
        todayTemp.textContent = todayTemperature;

        const locationElement = document.querySelector('.today-info > div > span');
        locationElement.textContent = `${data.city.name}, ${data.city.country}`;

        const weatherDescriptionElement = document.querySelector('.today-weather > h3');
        weatherDescriptionElement.textContent = todayWeather;
    
        const todayPreciptation = `${data.list[0].pop}%`;
        const todayHumidity = `${data.list[0].main.humidity}%`;
        const todayWindSpeed = `${data.list[0].wind.speed} hm/h`
        
        const dayInfoContainer = document.querySelector('.day-info');
        dayInfoContainer.innerHTML = `
        <div>
            <span class="title">CHUVA</span>
            <span class="value">${todayPreciptation}</span>
        </div>
        <div>
            <span class="title">UMIDADE</span>
            <span class="value">${todayHumidity}</span>
        </div>
        <div>
            <span class="title">VENTO</span>
            <span class="value">${todayWindSpeed}</span>
        </div>
        `;

        const today = new Date();
        const nextDaysData = data.list.slice(1); 
        const uniqueDays = new Set();
        let count = 0;
        daysList.innerHTML = '';
        for(const dayData of nextDaysData){
            const forecastDate = new Date(dayData.dt_txt);
            const dayAbbreviation = forecastDate.toLocaleDateString('pt-br', { weekday: 'short'});
            const dayTemp = `${Math.round(dayData.main.temp)}°C`;
            const iconCode = dayData.weather[0].icon;

            if(!uniqueDays.has(dayAbbreviation) && forecastDate.getDate() !== today.getDate()) {
                uniqueDays.add(dayAbbreviation);
                daysList.innerHTML += `
                <li>
                    <i class='bx bx-${weatherIconMap[iconCode]}'></i>
                    <span>${dayAbbreviation}</span>
                    <span class='day-temp'>${dayTemp}</span>
                </li>
                    `;

                    count++;
            }
            if(count === 4) break
        }
    }).catch(error =>{
        alert(`Erro ao buscar os dados: ${error}(Api Error)`);
    });
}


document.addEventListener('DOMContentLoaded', () =>{
    const defaultLocation = 'São paulo';
    fetchWeatherData(defaultLocation)
});

locButton.addEventListener('click', () =>{
    const location = prompt('Informe uma localização: ');
    if(!location) return;

    fetchWeatherData(location)
})