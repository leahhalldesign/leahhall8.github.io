fetch('json/temples.json')
    .then(result => {return result.json()})
    .then(
        resultJSON => {
            let templesList = resultJSON.templesList;

            templesList.forEach(
                temple => {
                    if (temple.TempleName === 'Vancouver British Columbia Temple') {
                        document.querySelector('#vancouverName').textContent = temple.TempleName;
                        document.querySelector('#vancouverStreet').textContent = temple.StreetLine;
                        document.querySelector('#vancouverCity').textContent = temple.City;
                        document.querySelector('#vancouverState').textContent = temple.State;
                        document.querySelector('#vancouverCountry').textContent = temple.Country;
                        document.querySelector('#vancouverZip').textContent = temple.Zip;
                        document.querySelector('#vancouverPhone').textContent = temple.Telephone;
                        document.querySelector('#vancouverEmail').textContent = temple.Email;
                        document.querySelector('#vancouverServices').textContent = temple.Services;
                        document.querySelector('#vancouverHistory').textContent = temple.History;
                        document.querySelector('#vancouverSchedule').textContent = temple.Schedule;
                        document.querySelector('#vancouverClosures').textContent = temple.Closures;
                    }
                    else if (temple.TempleName === 'Barranquilla Columbia Temple') {
                        document.querySelector('#barrName').textContent = temple.TempleName;
                        document.querySelector('#barrStreet').textContent = temple.StreetLine;
                        document.querySelector('#barrCity').textContent = temple.City;
                        document.querySelector('#barrState').textContent = temple.State;
                        document.querySelector('#barrCountry').textContent = temple.Country;
                        document.querySelector('#barrZip').textContent = temple.Zip;
                        document.querySelector('#barrPhone').textContent = temple.Telephone;
                        document.querySelector('#barrEmail').textContent = temple.Email;
                        document.querySelector('#barrServices').textContent = temple.Services;
                        document.querySelector('#barrHistory').textContent = temple.History;
                        document.querySelector('#barrSchedule').textContent = temple.Schedule;
                        document.querySelector('#barrClosures').textContent = temple.Closures;
                    }
                    else if (temple.TempleName === 'Laie Hawaii Temple') {
                        document.querySelector('#laieName').textContent = temple.TempleName;
                        document.querySelector('#laieStreet').textContent = temple.StreetLine;
                        document.querySelector('#laieCity').textContent = temple.City;
                        document.querySelector('#laieState').textContent = temple.State;
                        document.querySelector('#laieCountry').textContent = temple.Country;
                        document.querySelector('#laieZip').textContent = temple.Zip;
                        document.querySelector('#laiePhone').textContent = temple.Telephone;
                        document.querySelector('#laieEmail').textContent = temple.Email;
                        document.querySelector('#laieServices').textContent = temple.Services;
                        document.querySelector('#laieHistory').textContent = temple.History;
                        document.querySelector('#laieSchedule').textContent = temple.Schedule;
                        document.querySelector('#laieClosures').textContent = temple.Closures;
                    }
                    else if (temple.TempleName === 'Logan Utah Temple') {
                        document.querySelector('#loganName').textContent = temple.TempleName;
                        document.querySelector('#loganStreet').textContent = temple.StreetLine;
                        document.querySelector('#loganCity').textContent = temple.City;
                        document.querySelector('#loganState').textContent = temple.State;
                        document.querySelector('#loganCountry').textContent = temple.Country;
                        document.querySelector('#loganZip').textContent = temple.Zip;
                        document.querySelector('#loganPhone').textContent = temple.Telephone;
                        document.querySelector('#loganEmail').textContent = temple.Email;
                        document.querySelector('#loganServices').textContent = temple.Services;
                        document.querySelector('#loganHistory').textContent = temple.History;
                        document.querySelector('#loganSchedule').textContent = temple.Schedule;
                        document.querySelector('#loganClosures').textContent = temple.Closures;
                    }
                }
            )
        }
    );    