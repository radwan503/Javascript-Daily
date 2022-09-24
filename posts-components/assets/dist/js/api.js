//Post list Display
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


//comment List display
const commentList = document.getElementById('commentList')
const searchComment = document.getElementById('searchComment');
const commentByPostInput = document.getElementById('commentByPost');
searchComment.addEventListener('click', function () {
   const commentValue = commentByPostInput.value;
   commentList.innerHTML = ' ';
   loadComment(commentValue);
   console.log(commentValue)
})


function loadComment(commentValue) {
   fetch(`https://jsonplaceholder.typicode.com/posts/${commentValue}/comments`)
      .then((response) => response.json())
      .then((data) => commentDisplay(data));
}
loadComment(1);

function commentDisplay(comments) {
   for (const comment of comments) {
      const postWiseComment = document.createElement('div')
      postWiseComment.innerHTML = `
      <div class="media mb-5">
      <span class="badge rounded-pill ${comment.postId % 2 == 0 ? 'bg-warning ' : 'bg-info'} text-dark mb-3">Post ID:${comment.postId}</span>
         <div class="media-body">
            <h5 class="mt-0">
             ${comment.name}
            </h5>
            ${comment.body}
            <br>
            <span class="badge rounded-pill bg-primary mt-3">${comment.email}</span>
            
         </div>
      </div>
      `
      commentList.appendChild(postWiseComment);
   }
}


//creating post

const idInput = document.getElementById('idInput');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const postSubmit = document.getElementById('postSubmit');

postSubmit.addEventListener('click', function () {
   const userIdValue = idInput.value;
   const titleValue = titleInput.value;
   const bodyValue = bodyInput.value;

   console.log(userIdValue)

   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         userId: userIdValue,
         title: titleValue,
         body: bodyValue,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      }
   })
      .then(response => response.json())
      .then(data => displayPostData(data))

});

function displayPostData(data) {
   console.log(data)
   const postDataView = document.getElementById('postDataView');
   const div = document.createElement('div');
   div.innerHTML = `
     id:${data.id} -- userId:${data.userId} -- Title: ${data.title} -- Body: ${data.body}
   `
   postDataView.append(div)

}



//update post
const updateIdInput = document.getElementById('updateIdInput');
const updateTitleInput = document.getElementById('updateTitleInput');
const updateBodyInput = document.getElementById('updateBodyInput');
const updateSubmit = document.getElementById('updateSubmit');

function updatePost() {
   fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
         id: 1,
         title: "update data",
         body: "body",
         userId: 1
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      }
   })
      .then(response => response.json())
      .then(data => showEditValue(data))
}
updatePost();
function showEditValue(data) {
   updateIdInput.value = data.id
   updateTitleInput.value = data.title
   updateBodyInput.value = data.body
}


updateSubmit.addEventListener('click', function () {
   const updateValue = updateTitleInput.value
})


//filter
const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', function () {
   console.log(filterInput.value)
   const filterValue = filterInput.value;
   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${filterValue}`)
      .then((response) => response.json())
      .then((filterData) => filterList(filterData));
})


function filterList(filterData) {
   console.log(filterData)
   const filterList = document.getElementById('filterList');
   for (data of filterData) {
      const div = document.createElement('div')
      div.innerHTML = `
      <li class="list-group-item d-flex justify-content-between align-items-start">
         <div class="ms-2 me-auto">
            <div class="fw-bold">${data.id}. ${data.title}</div>
            ${data.body}
         </div>
         <span class="badge bg-primary rounded-pill">${data.userId}</span>
      </li>
      `
      filterList.append(div)
   }



}