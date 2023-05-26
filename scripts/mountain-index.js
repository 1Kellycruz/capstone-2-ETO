const mountainSelectorEl = document.getElementById('mountainSelector');
const locationTableEl = document.getElementById('activitiesTbl');

mountainsArray.forEach(element => {
    const optionEl = new Option(element.name);
    mountainSelectorEl.appendChild(optionEl);
});

mountainSelectorEl.addEventListener('change', () => {

    const tbody = locationTableEl.querySelector('tbody');
    tbody.innerHTML = '';

    const selectedMountain = mountainSelectorEl.value;

    const mountainSelected = mountainsArray.filter(
        (mountain) => mountain.name === selectedMountain);

    mountainSelected.forEach((mntName) => {
        const row = tbody.insertRow();

        const CellName = row.insertCell();
        CellName.innerHTML = mntName.name

        const CellDescription = row.insertCell();
        CellDescription.innerHTML = mntName.desc
    
        const CellElevation = row.insertCell();
        CellElevation.innerHTML = mntName.elevation

        const CellCords = row.insertCell();
        CellCords.innerHTML = `${mntName.coords.lng}, ${mntName.coords.lat}`;
        
      
    });
});


function makeImage() {
    const matchedImage = mountainsArray.find((mountain) => mountain.name === mountainName.value)
    const img = document.createElement('img')
    img.src = `./images/${matchedImage.img}`;
    img.alt = 'picture';
    addImage.appendChild(img);
}
