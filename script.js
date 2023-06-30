function getWeatherData() {
    const city_name = document.getElementById('city_name');
    const temperature = document.getElementById('temperature');
    const cloud_percentage = document.getElementById('cloud_percentage');
    const humidity_percentage = document.getElementById('humidity_percentage');
    const wind_speed = document.getElementById('wind_speed');
    const rainfall = document.getElementById('rainfall');

    const API_KEY = '3ffefa880cfb4cb59f6183944233006';
    let location_name = document.getElementById('location_input').value;
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location_name}`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            city_name.innerHTML = data.location.name;
            temperature.innerHTML = data.current.feelslike_f;
            cloud_percentage.innerHTML = data.current.cloud + "%";
            humidity_percentage.innerHTML = data.current.humidity + "%";
            wind_speed.innerHTML = data.current.wind_mph + " mph";
            rainfall.innerHTML = data.current.precip_in + '"';
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

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
  