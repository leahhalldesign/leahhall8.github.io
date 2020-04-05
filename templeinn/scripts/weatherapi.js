const apiVancouver = "https://api.openweathermap.org/data/2.5/weather?id=6173331&appid=df067e080967497fce241d559e7409a0&units=imperial"
const apiBarr = "https://api.openweathermap.org/data/2.5/weather?id=3689147&appid=df067e080967497fce241d559e7409a0&units=imperial"
const apiLaie = "https://api.openweathermap.org/data/2.5/weather?id=5850027&appid=df067e080967497fce241d559e7409a0&units=imperial"
const apiLogan = "https://api.openweathermap.org/data/2.5/weather?id=5777544&appid=df067e080967497fce241d559e7409a0&units=imperial"


fetch(apiVancouver)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);
            let currentTemp = jsObject.main.temp;
            let windSpeed = jsObject.wind.speed;
            let windChill = 0;

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                document.querySelector('.windChill').innerHTML = windChill.toFixed(0) + '&deg';
            }
                else {
                    windChill = 'N/A';
                    document.querySelector('.windChill').innerHTML = windChill;
                }

            document.querySelector('.currentTemp').innerHTML = currentTemp.toFixed(0) + '&deg';
            document.querySelector('.windSpeed').innerHTML = windSpeed.toFixed(0) + 'mph';

            if (windChill === 0) {
                document.querySelector(".windChill").innerHTML = 'N/A';
            }
            else {
                document.querySelector(".windChill").innerHTML = Math.round(windChill) + '&deg';
            }

            document.querySelector('.weatherDesc').textContent = jsObject.weather[0].main;

            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

            document.querySelector('.weatherImage').setAttribute('src', imageURL);

            document.querySelector('.weatherImage').setAttribute('alt', jsObject.weather[0].main);

            });

fetch(apiBarr)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);
            let currentTempB = jsObject.main.temp;
            let windSpeedB = jsObject.wind.speed;
            let windChillB = 0;

            if (currentTempB < 50 && windSpeedB > 3) {
                windChillB = 35.74 + 0.6215 * currentTempB - 35.75 * Math.pow(windSpeedB, 0.16) + 0.4275 * currentTempB * Math.pow(windSpeedB, 0.16);
                document.querySelector('.windChillB').innerHTML = windChillB.toFixed(0) + '&deg';
            }
                else {
                    windChillB = 'N/A';
                    document.querySelector('.windChillB').innerHTML = windChillB;
                }

            document.querySelector('.currentTempB').innerHTML = currentTempB.toFixed(0) + '&deg';
            document.querySelector('.windSpeedB').innerHTML = windSpeedB.toFixed(0) + 'mph';

            if (windChillB === 0) {
                document.querySelector(".windChillB").innerHTML = 'N/A';
            }
            else {
                document.querySelector(".windChillB").innerHTML = Math.round(windChillB) + '&deg';
            }

            document.querySelector('.weatherDescB').textContent = jsObject.weather[0].main;

            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

            document.querySelector('.weatherImageB').setAttribute('src', imageURL);

            document.querySelector('.weatherImageB').setAttribute('alt', jsObject.weather[0].main);

            });

fetch(apiLaie)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);
            let currentTempL = jsObject.main.temp;
            let windSpeedL = jsObject.wind.speed;
            let windChillL = 0;

            if (currentTempL < 50 && windSpeedL > 3) {
                windChillL = 35.74 + 0.6215 * currentTempL - 35.75 * Math.pow(windSpeedL, 0.16) + 0.4275 * currentTempL * Math.pow(windSpeedL, 0.16);
                document.querySelector('.windChillL').innerHTML = windChillL.toFixed(0) + '&deg';
            }
                else {
                    windChillL = 'N/A';
                    document.querySelector('.windChillL').innerHTML = windChillL;
                }

            document.querySelector('.currentTempL').innerHTML = currentTempL.toFixed(0) + '&deg';
            document.querySelector('.windSpeedL').innerHTML = windSpeedL.toFixed(0) + 'mph';

            if (windChillL === 0) {
                document.querySelector(".windChillL").innerHTML = 'N/A';
            }
            else {
                document.querySelector(".windChillL").innerHTML = Math.round(windChillL) + '&deg';
            }

            document.querySelector('.weatherDescL').textContent = jsObject.weather[0].main;

            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

            document.querySelector('.weatherImageL').setAttribute('src', imageURL);

            document.querySelector('.weatherImageL').setAttribute('alt', jsObject.weather[0].main);

            });

fetch(apiLogan)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);
            let currentTempLO = jsObject.main.temp;
            let windSpeedLO = jsObject.wind.speed;
            let windChillLO = 0;

            if (currentTempLO < 50 && windSpeedLO > 3) {
                windChillLO = 35.74 + 0.6215 * currentTempLO - 35.75 * Math.pow(windSpeedLO, 0.16) + 0.4275 * currentTempLO * Math.pow(windSpeedLO, 0.16);
                document.querySelector('.windChillLO').innerHTML = windChillLO.toFixed(0) + '&deg';
            }
                else {
                    windChillLO = 'N/A';
                    document.querySelector('.windChillLO').innerHTML = windChillLO;
                }

            document.querySelector('.currentTempLO').innerHTML = currentTempLO.toFixed(0) + '&deg';
            document.querySelector('.windSpeedLO').innerHTML = windSpeedLO.toFixed(0) + 'mph';

            if (windChillLO === 0) {
                document.querySelector(".windChillLO").innerHTML = 'N/A';
            }
            else {
                document.querySelector(".windChillLO").innerHTML = Math.round(windChillLO) + '&deg';
            }

            document.querySelector('.weatherDescLO').textContent = jsObject.weather[0].main;

            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

            document.querySelector('.weatherImageLO').setAttribute('src', imageURL);

            document.querySelector('.weatherImageLO').setAttribute('alt', jsObject.weather[0].main);

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