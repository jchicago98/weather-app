function getWeatherData() {
    const API_KEY = '3ffefa880cfb4cb59f6183944233006';
    let location_name = document.getElementById('location_input').value;
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location_name}`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the response data
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors
        });

}