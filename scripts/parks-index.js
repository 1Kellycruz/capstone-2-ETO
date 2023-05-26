const locationSelector = document.getElementById('locationSelector');
const parkTypeSelectorEl = document.getElementById('parkTypeSelector');
const tableEl = document.getElementById('tableId');
const tableInfoEl = document.getElementById('tableInfo');

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


    if (!locationSelector)
    {
        locationSelector.innerHTML = "";
        return;
    }  if (parkTypeSelectorEl) {
        parkTypeSelectorEl.value = '';
    }
    

    const tbody = tableEl.querySelector('tbody');
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
    // Clears table
    
    if (!parkTypeSelectorEl)
    {
        tableInfoEl.innerHTML = "";
        return;
    } if (locationSelector) {
        locationSelector.value = '';
    }

    const tbody = tableEl.querySelector('tbody');
    tbody.innerHTML = '';

    const selectedParkType = parkTypeSelectorEl.value;

    const selectedNationParkType = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedParkType.toLowerCase()));
    

    selectedNationParkType.forEach((parkType) => {
    buildParkRow (tbody, parkType) 

    });
});

function buildParkRow(table, park) {
    const row = table.insertRow();
        
    const cellName = row.insertCell();
    cellName.innerHTML = park.LocationName

    const cellState = row.insertCell();
    cellState.innerHTML = park.State
        
    const cellCity = row.insertCell();
    cellCity.innerHTML = park.City

    const cellAddress = row.insertCell();
    cellAddress.innerHTML = park.Address

    const cellZip = row.insertCell();
    cellZip.innerHTML = park.ZipCode

    const cellPhone = row.insertCell();
    cellPhone.innerHTML = park.Phone
}

