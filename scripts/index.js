const locationSelector = document.getElementById('locationSelector');
const parkTypeSelectorEl = document.getElementById('parkTypeSelector');
const locationTableEl = document.getElementById('activitiesTbl');

// creating search options 
locationsArray.forEach((location) => {
    const optionEl = new Option(location);
    locationSelector.appendChild(optionEl);
});

parkTypesArray.forEach((parkType) => {
    const optionEl = new Option(parkType);
    parkTypeSelectorEl.appendChild(optionEl);
});


locationSelector.addEventListener('change', () => {
    // clears rows in table body 
    const tbody = locationTableEl.querySelector('tbody');
    tbody.innerHTML = '';

    // refrencing selected value
    const selectedLocation = locationSelector.value;

    // finding matched location
    const locationSelected = nationalParksArray.filter(
        (location) => location.State === selectedLocation
    )

    locationSelected.forEach((location) => {
        const row = tbody.insertRow();
        
        const cellName = row.insertCell();
        cellName.innerHTML = location.LocationName

        const cellState = row.insertCell();
        cellState.innerHTML = location.State
        
        const cellCity = row.insertCell();
        cellCity.innerHTML = location.City

        const cellAddress = row.insertCell();
        cellAddress.innerHTML = location.Address

        const cellZip = row.insertCell();
        cellZip.innerHTML = location.ZipCode

        const cellPhone = row.insertCell();
        cellPhone.innerHTML = location.Phone

    });

});

parkTypeSelectorEl.addEventListener('change', () => {

    const tbody = locationTableEl.querySelector('tbody');
    tbody.innerHTML = '';

    const parkTypeSelected = parkTypeSelectorEl.value.toLocaleLowerCase;
    
    const selectedParkType = nationalParksArray.filter(
        (type) => type.LocationName.toLocaleLowerCase === parkTypeSelected
    ) 

    selectedParkType.forEach((parkType) => {
        const row = tbody.insertRow();
 
        const cellName = row.insertCell();
        cellName.innerHTML = parkType.LocationName

        })

});

