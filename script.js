var location_name = '';

function getWeatherData() {
    let city_name = document.getElementById('city_name');
    let temperature = document.getElementById('temperature');
    let cloud_percentage = document.getElementById('cloud_percentage');
    let humidity_percentage = document.getElementById('humidity_percentage');
    let wind_speed = document.getElementById('wind_speed');
    let rainfall = document.getElementById('rainfall');
    let user_location_input = document.getElementById('location_input').value
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
        })
        .catch(error => {
            console.error('Error:', error);
        });

    location_name = '';

}

function updateWeatherHyperLinks(location_input) {
    location_name = location_input;
    getWeatherData();
}

document.addEventListener("DOMContentLoaded", function () {
    getWeatherData();
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
