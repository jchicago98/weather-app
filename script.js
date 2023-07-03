var location_name = '';

function getWeatherData() {
    let city_name = document.getElementById('city_name');
    let temperature = document.getElementById('temperature');
    let cloud_percentage = document.getElementById('cloud_percentage');
    let humidity_percentage = document.getElementById('humidity_percentage');
    let wind_speed = document.getElementById('wind_speed');
    let rainfall = document.getElementById('rainfall');
    let current_weather_condition = document.getElementById('current_weather_condition');
    let user_location_input = document.getElementById('location_input').value;
    let weather_icon_image = document.getElementById('weather_icon_image').src;
    const API_KEY = '3ffefa880cfb4cb59f6183944233006';

    if (location_name === '') {
        if (user_location_input === '') {
            location_name = 'Chicago';
        }
        else {
            location_name = user_location_input;
        }
    }



    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location_name}`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            city_name.innerHTML = data.location.name;
            temperature.innerHTML = data.current.temp_f + "&#176;";
            cloud_percentage.innerHTML = data.current.cloud + "%";
            humidity_percentage.innerHTML = data.current.humidity + "%";
            wind_speed.innerHTML = data.current.wind_mph + " mph";
            rainfall.innerHTML = data.current.precip_in + '"';
            current_weather_condition.innerHTML = data.current.condition.text;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    location_name = '';
    updateBackgroundColor();
}

function updateWeatherHyperLinks(location_input) {
    location_name = location_input;
    getWeatherData();
}

function updateBackgroundColor() {
    const currentHour = new Date().getHours();
    const bodyElement = document.body;
    const card1Element = document.getElementById('left_card');

    if (currentHour >= 6 && currentHour < 12) {
        bodyElement.style.backgroundImage = 'linear-gradient(#FFD54F, #FFA000)';
        card1Element.style.backgroundImage = 'linear-gradient(#FFA000, #FFD54F)';
    }
    else if (currentHour >= 12 && currentHour < 18) {
        bodyElement.style.backgroundImage = 'linear-gradient(#81D4FA, #2196F3)';
        card1Element.style.backgroundImage = 'linear-gradient(#2196F3, #81D4FA)';
    }
    else {
        bodyElement.style.backgroundImage = 'linear-gradient(#9E9E9E, #424242)';
        card1Element.style.backgroundImage = 'linear-gradient(#424242, #9E9E9E)';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    getWeatherData();
    updateBackgroundColor();
})

document.addEventListener("DOMContentLoaded", function () {

    const localTimeElement = document.getElementById("local_time");
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    function updateLocalTime() {
        const currentTime = new Date().toLocaleString(undefined, options);
        localTimeElement.textContent = currentTime;
    }

    setInterval(updateLocalTime, 1000);
    updateLocalTime();
});
