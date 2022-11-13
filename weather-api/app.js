const API_KEY = `cb3cbec10a758d422968f443863720c8`;

//get location based on search
const searchTemperature = () => {

   const cityName = document.getElementById('cityName').value;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;


   fetch(url)
      .then(response => response.json())
      .then(data => displayTemperature(data))
}

const displayTemperature = (data) => {
   console.log(data)
   document.getElementById('locationId').innerText = data.name;
   document.getElementById('temperatureId').innerText = data.main.temp;
   document.getElementById('temperatureTypeId').innerText = data.weather[0].main;
}


// get location based on lat and long
const getLocation = () => {
   if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition)
   } else {
      document.getElementById('locationId').innerText = "Geolocation is not supported by this browser."
   }
}

const showPosition = (position) => {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then(response => response.json())
      .then(data => displayTemperaturebasOnLatLong(data))
}
const displayTemperaturebasOnLatLong = (data) => {
   console.log(data)
   document.getElementById('locationId').innerText = data.name;
   document.getElementById('temperatureId').innerText = data.main.temp;
   document.getElementById('temperatureTypeId').innerText = data.weather[0].main;
}


getLocation()