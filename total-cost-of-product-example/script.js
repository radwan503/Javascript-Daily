const products = [
  {
    name: 'laptop',
    price: 50000,
    quantity: 1,
    image: 'https://i.imgur.com/w2rCsEw.jpg',
  },
  {
    name: 'shirt',
    price: 500,
    quantity: 8,
    image: 'https://i.imgur.com/w2rCsEw.jpg',
  },
  {
    name: 'phone',
    price: 20000,
    quantity: 1,
    image: 'https://i.imgur.com/w2rCsEw.jpg',
  },
  {
    name: 'pant',
    price: 800,
    quantity: 2,
    image: 'https://i.imgur.com/w2rCsEw.jpg',
  },
];


const card = document.querySelector('#cardVal');
const totalCount = document.querySelector('.total');
let totalInitial = 0;
for (const product of products) {
  let createSingleCard = document.createElement('DIV');
  createSingleCard.classList.add('single-card');

  let cardContent = `
  <div class="col">
    <div class="card shadow-sm">
      <img src="${product.image}" class="img-fluid product-image" alt="...">
      <div class="card-body">
        <p class="card-text">${product.name}</p><small class="text-muted">${product.quantity} piece</small>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Details</button>
          </div>

          <h1 class="card-title pricing-card-title">$ ${product.price}<small class="text-muted fw-light">/mo</small></h1><br>
          
        
        </div>
      </div>
    </div>
  </div>
    `;
  card.appendChild(createSingleCard);
  createSingleCard.innerHTML = cardContent;

  // total
  totalInitial = totalInitial + product.price * product.quantity;
}
//total show in top
totalCount.textContent = 'Total Amount »' + totalInitial;


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



// seach product
let searchValue;
const searchInput = document.querySelector('.product-search')
const searchValueName = document.querySelector('.search-value-name');

searchInput.addEventListener('keyup', function (e) {
  if (e.which == 13) {
    searchValue = searchInput.value;
    searchProduct(products, searchValue)
    searchInput.value = '';
  }
})


function searchProduct(products, searchText) {
  const matched = [];
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matched.push(product.name)
    }
  }
  searchValueName.innerHTML = matched;
}
