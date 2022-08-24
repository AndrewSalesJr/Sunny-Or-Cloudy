var test = function() {
    console.log("function was called")
}

var currentURL = "https://api.openweathermap.org/data/2.5/weather?";
        var cityName = city;
        var unitsURL = "&units=imperial";
        var apiIdURL = "&appid="
        var apiKey = "2201c91e6308abe919670594e9f740c3";
        var openCurrWeatherAPI = currentURL + cityName + unitsURL + apiIdURL + apiKey;

        $.ajax({
            url: openCurrWeatherAPI,
            method: "GET"
        }).then(function (response1) {

        weatherObj = {
            city: `${response1.name}`,
            wind: response1.wind.speed,
            humidity: response1.main.humidity,
            temp: Math.round(response1.main.temp),

            date: (convertDate(response1.dt)),
            icon: `http://openweathermap.org/img/w/${response1.weather[0].icon}.png`,
            desc: response1.weather[0].description
        }