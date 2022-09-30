function fetchCountryList() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => showCountryList(countries))
}
fetchCountryList();

function showCountryList(countries) {
  const countryList = document.getElementById('countryList');
  countries.forEach(country => {
    console.log(country)
    const div = document.createElement('div');
    div.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'mb-4')
    div.innerHTML = `
        <div class="bg-white rounded shadow-sm">
          <img src="${country.flags.png}" alt="" class="img-fluid flag-img card-img-top">
          <div class="p-4">
            <h5 id="countryTitle">${country.name.common}</h5>
            <p class="small text-muted mb-0">${country.capital} - ${country.continents}</p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
            class="d-flex align-items-center justify-content-center 
            text-center w-100 rounded-pill bg-light px-3 py-2 mt-4" onclick="loadCountryByName('${country.name.common}')">
             Details
            </button>
          </div>
        </div>
      `
    countryList.append(div)
  })
}


// Load by name and show details modal by name
function loadCountryByName(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(countryInfoFromName => countryDetails(countryInfoFromName))
}

function countryDetails(countryWiseDetails) {
  console.log(countryWiseDetails);
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${countryWiseDetails[0].name.common}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div>
          <span class="d-inline-block">Capital:</span><span> ${countryWiseDetails[0].capital}</span>
      </div>
      <div>
          <span class="d-inline-block">Population:</span><span> ${countryWiseDetails[0].population}</span>
      </div>
     
      <div class="mt-3">
      <img src="${countryWiseDetails[0].flags.png}" alt="" class="img-fluid card-img-top">
      </div>

    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
 
  `
}

