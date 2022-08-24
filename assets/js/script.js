var test = function() {
    console.log("function was called")
}

var currentURL = "https://api.openweathermap.org/data/2.5/weather?";
        var cityName = city;
        var unitsURL = "&units=imperial";
        var apiIdURL = "&appid="
        var apiKey = "2201c91e6308abe919670594e9f740c3";
        var openCurrWeatherAPI = currentURL + cityName + unitsURL + apiIdURL + apiKey;
