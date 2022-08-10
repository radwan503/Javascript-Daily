// Event bubbling

//parent click
document.getElementById('parent').addEventListener('click', function () {
  alert('you clikc on parent')
})
//child click
document.getElementById('div').addEventListener('click', function () {
  alert('you click on div')
})

document.getElementById('p').addEventListener('click', function () {
  alert('you click on P')
})



// for stop event bubbling
document.getElementById('parent1').addEventListener('click', function () {
  alert('you clikc on parent')
})
//child click
document.getElementById('div1').addEventListener('click', function () {
  alert('you click on div')
})

document.getElementById('p1').addEventListener('click', function () {
  alert('you click on P')
})

document.getElementById("p1").addEventListener("click", function (event) {
  event.stopPropagation()
}, false);