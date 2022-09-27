function randomUser() {
   fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => loadUser(data.results))
}

randomUser();

function loadUser(data) {
   console.log(data)
   const usersInformation = document.getElementById('users-information');
   for (user of data) {
      console.log(user.gender)
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card p-3">
          <div class="d-flex align-items-center">
            <div class="image pe-3">
              <img
                src="${user.picture.large}"
                class="rounded" width="150">
            </div>
            <div class="ml-3 w-100">
              <h4 class="mb-0 mt-0 text-capitalize">${user.name.first} ${user.name.last} </h4>
              <span>${user.email}</span>
              <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column">
                  <span class="articles">City</span>
                  <span class="number1">${user.location.city}</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="followers">State</span>
                  <span class="number2">${user.location.state}</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="rating">Country</span>
                  <span class="number3">${user.location.country}</span>
                </div>
              </div>
              <div class="button mt-2 d-flex flex-row align-items-center">
                <button class="btn btn-sm btn-primary w-100" onClick="window.location.reload();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg> Load new user</button>
              
              </div>
            </div>
          </div>
        </div>
      `
      usersInformation.append(div)

   }

}
