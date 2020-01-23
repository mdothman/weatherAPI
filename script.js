$(document).ready(function() {
    // console.log("Ready!");

    var searchFiveDayApi = `api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&ID&Key`;
    var searchCurrentDayApi = `api.openweathermap.org/data/2.5/weather?q={city name},{country code}&ID&Key`;

    const userLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            throw "err";
        }

        function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            console.log(`latitude:${latitude}\nlongitude:${longitude}`)
            var fiveDayUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=7dbb06c3370d03c103714c4df176ab7d`;
            var currentDayUrl = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7dbb06c3370d03c103714c4df176ab7d`;
            $.ajax({
                    url: fiveDayUrl,
                    method: "GET"
                })
                .then(function(response) {
                        console.log(response)
                    }

                )
            $.ajax({
                    url: currentDayUrl,
                    method: "GET"
                })
                .then(function(response) {
                        console.log(response)
                    }

                )

        }


    };

    userLocation();
    const inputCitySearch = $("#searchButton").click(function() {
        var city = $("#citySearch").val();
        console.log(city)
    });


})