var currentDate = new Date ();
console.log(currentDate);

var currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;


document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';