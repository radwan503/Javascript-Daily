// product json
const products = [
  {
    name: 'laptop',
    price: 50000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    name: 'shirt',
    price: 500,
    quantity: 8,
    image: 'https://www.collinsdictionary.com/images/full/tshirt_204029461_1000.jpg',
  },
  {
    name: 'phone',
    price: 20000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    name: 'pant',
    price: 800,
    quantity: 2,
    image: 'https://5.imimg.com/data5/UV/UD/MY-52691782/mens-cotton-pant-500x500.jpg',
  },
];

// inser product in card container
const card = document.querySelector('#cardVal');
const totalCount = document.querySelector('.total');
let totalInitial = 0;
for (const product of products) {
  let createSingleCard = document.createElement('DIV');
  createSingleCard.classList.add('single-card');
  let cardContent = `
  <div class="col">
    <div class="card shadow-sm" id="cardSingle">
      <img src="${product.image}" class="img-fluid product-image" alt="...">
      <div class="card-body">
        <p class="card-text fw-bold text-capitalize" id="card-text" >${product.name}</p><small class="text-muted">${product.quantity} </small>piece
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" id="addToCart">Add to Cart</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Details</button>
          </div>

          <h1 class="card-title pricing-card-title">$<span id="price"> ${product.price}</span><small class="text-muted fw-light">/mo</small></h1><br>
          
        
        </div>
      </div>
    </div>
  </div>
    `;
  card.appendChild(createSingleCard);
  createSingleCard.innerHTML = cardContent;

  // total
  //totalInitial = totalInitial + product.price * product.quantity;
}

// Add product price and pices in total button
const btns = document.querySelectorAll('#addToCart');
let totalCost = 0;
for (const btn of btns) {
  btn.addEventListener('click', function (e) {
    const productQuantity = e.currentTarget.parentElement.parentElement.parentElement.children[1].innerText
    console.log(productQuantity)
    const priceValue = e.currentTarget.parentElement.parentElement.parentElement.children[3].children[1].children[0].innerText;
    totalCost += priceValue * productQuantity;
    e.currentTarget.style.backgroundColor = 'orange';
    e.currentTarget.setAttribute('disabled', 'disabled')
    totalCount.textContent = 'Total Amount »' + totalCost;
  })
}

//total show
totalCount.textContent = 'Total Amount » ' + totalCost;


// seach product
let searchValue;
const searchInput = document.querySelector('.product-search')
const searchValueName = document.querySelector('.search-value-name');
// null check and search
searchInput.addEventListener('keyup', function (e) {
  if (e.which == 13) {
    if (searchInput.value == '') {
      searchInput.style.borderColor = 'red';
      searchValueName.innerText = "Please Enter Your Search Keyword"
    } else {
      searchValue = searchInput.value;
      searchInput.style.borderColor = 'black'
      searchProduct(products, searchValue)
      searchInput.value = '';
    }
  }

})

// search product
function searchProduct(products, searchText) {
  const matched = [];
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matched.push(product.name)
      searchValueName.innerHTML = "This Search value Match -- " + matched;
    } else {
      searchValueName.innerText = "Search Value Not Found"
    }
  }
}

























// 2nd Example
// let displayMenu = products.map((product) => {
//   return `
//     <div class="text-center">
//       <img src="https://i.imgur.com/w2rCsEw.jpg" width="200" />
//     </div>

//     <div class="product-details">
//       <span class="font-weight-bold d-block">123</span>
//       <span>Red Redish</span>

//       <div class="buttons d-flex flex-row">
//         <div class="cart"><i class="fa fa-shopping-cart"></i></div>
//         <button class="btn btn-success cart-button btn-block">
//           <span class="dot">1</span>Add to cart
//         </button>
//       </div>

//       <div class="weight">
//         <small>1 piece 2.5kg</small>
//       </div>
//     </div>
//     `;
// });

// card.innerHTML = displayMenu;


