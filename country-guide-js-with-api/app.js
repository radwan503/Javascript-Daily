let searchBtn =  document.getElementById('searchBtn');
let countryInput = document.getElementById('countryInput');
let countryDetails =  document.getElementById('countryDetails');
searchBtn.addEventListener('click',()=>{
   const countryName = countryInput.value;
   console.log(countryName);
   const baseURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
   console.log(baseURL);
   fetch(baseURL)
   .then((response)=>response.json())
   .then((data)=>{ 
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0]);
    console.log(Object.values(data[0].languages).toString().split(",").join(", "))
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    countryDetails.innerHTML =`
       <div class="card">
            <img src="${data[0].flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>${data[0].name.common}</h3>
                <p class="card-text">Capital :${data[0].capital[0]}</p>
                <p class="card-text">${data[0].continents[0]}</p>
                <p class="card-text">${data[0].population}</p>
                <p class="card-text">${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</p>
                <p class="card-text">${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
               
            </div>
        </div>
    `;
   }).catch(()=>{
      if(countryName.length == 0){
        countryDetails.innerHTML =`
          <h6 class="text-danger">Input field cannot be empty</h6>
        `
      }else{
        countryDetails.innerHTML =`
        <h6 class="text-danger">Please Enter a valid country name</h6>
        `
      }
   })
});
