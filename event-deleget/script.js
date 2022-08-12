const addBtn = document.getElementById('addBtn');
let index = 0;
addBtn.addEventListener('click', function () {
   const li = document.createElement('li')
   li.innerText = 'And a new ' + index++;
   li.classList.add('list-group-item')
   const listGroup = document.getElementById('listGroup')
   listGroup.appendChild(li)
});

const items = document.getElementsByClassName('list-group-item');
const listGroup = document.getElementById('listGroup')
listGroup.addEventListener('click', function (event) {
   alert('Item Deleted')
   return event.target.parentNode.removeChild(event.target)


})