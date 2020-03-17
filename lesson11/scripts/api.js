const apiURLWeather = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=df067e080967497fce241d559e7409a0&units=imperial"

fetch(apiURLWeather)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);
            let currentTemp = jsObject.main.temp;
            let windSpeed = jsObject.wind.speed;
            let windChill = 0;

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                document.querySelector('#windChill').innerHTML = windChill.toFixed(0) + '&deg';
            }
                else {
                    windChill = 'N/A';
                    document.querySelector('#windChill').innerHTML = windChill;
                }

            document.querySelector('#currentTemp').innerHTML = currentTemp.toFixed(0) + '&deg';
            document.querySelector('#windSpeed').innerHTML = windSpeed.toFixed(0) + 'mph';

            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            }
            else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg';
            }

            document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;

            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

            document.querySelector('.weatherImage').setAttribute('src', imageURL);

            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[0].main);

            });
            

            var daysOfWeekAPI = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=df067e080967497fce241d559e7409a0&units=imperial"
fetch(apiURLForecast)
            .then(response => response.json())
            .then(
                jsObject => {                   
                    let counter = 1;
                    jsObject.list.forEach(
                        forecast => {
                            if (forecast.dt_txt.includes('18:00')) {
                                let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                                let dayOfWeek = daysOfWeekAPI[forecastDate.getDay()];

                                document.getElementById(`day${counter}`).textContent = dayOfWeek;

                                document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg';
                                
                                counter++;
                            }});
                            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[0].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[1].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[2].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[3].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[4].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[5].main);

                            document.querySelector('.weatherImage').setAttribute('src', imageURL);
                            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[6].main);
                });
