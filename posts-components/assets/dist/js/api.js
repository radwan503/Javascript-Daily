console.log("api fetch");

function loadPost() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => displayPost(data))
}

loadPost()

function displayPost(posts) {
   const postList = document.getElementById('postList');
   for (const post of posts) {
      const singlePost = document.createElement('div');
      singlePost.innerHTML = `
      <div class="card  border-0 shadow position-relative mb-5 px-4 py-4">
         <div class="card-body">
         <h5 class="card-title">${post.title}</h5>
         <p class="card-text">${post.body}</a>
         </div>
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         ${post.id}
           <span class="visually-hidden">unread messages</span>
          </span>
       </span>
     
      </div>
      `

      postList.append(singlePost);
   }
}

