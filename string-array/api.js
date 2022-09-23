function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
}

function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => displayData(data))
}


function loadPosts() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
}

function displayData(data) {
   console.log(data)
   const ul = document.getElementById('user-list');
   for (const user of data) {
      console.log(user.name)
      const li = document.createElement('li');
      li.innerText = `name:${user.name} Email:${user.email}`;
      ul.append(li);
   }

}