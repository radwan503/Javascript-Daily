//Filter table
$(document).ready(function () {
   $('#filterInput').on('keyup', function () {
      let value = $(this).val().toLowerCase();
      $('#listOfData tr').filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
   })
});

//filter list
$(document).ready(function () {
   $('#litsInput').on('keyup', function () {
      const value = $(this).val().toLowerCase();
      $('#listData li').filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
   })
})

//dropdownfilter
$(document).ready(function () {
   $('#dropDownInput').on('keyup', function () {
      let value = $(this).val().toLowerCase();
      $('.dropdown-menu li').filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
   })
})

// using fetching api
function filterUsingfetchApi() {
   fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => displayData(data.data))

}
filterUsingfetchApi();

function displayData(tabledata) {
   console.log(tabledata)
   const tableData = $('#tableData');
   for (data of tabledata) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
         <td>${data.first_name}</td>
         <td>${data.last_name}</td>
         <td>${data.email}</td>
         `;
      tableData.append(tr)
   }
}

$(document).ready(function () {
   $('#filterInputFiled').on('keyup', function () {
      let value = $(this).val().toLowerCase();
      $('#tableData tr').filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
   })
})
