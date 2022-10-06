const jeweleryProductList = document.getElementById('jeweleryProductList')
// call product api
const jeweleryProduct = () => {
  fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => res.json())
    .then(products => showProducts(products))
}
jeweleryProduct()

// show product in html page
const showProducts = (products) => {

  for (const product of products) {
    console.log(product)
    const singleitem = document.createElement('div');
    singleitem.classList.add('col-lg-3', 'col-sm-6')
    singleitem.innerHTML = `
      <div class="card d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product ">
            <img class="px-3 pt-3 shadow " src="${product.image}"
            alt="${product.title}">
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            <li class="icon" onclick="productDetails(${product.id})" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fas fa-eye"></span></li>
            <li class="icon mx-3"><span class="far fa-heart"></span></li>
            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            </ul>
        </div>
        <div class="tag bg-red">sale</div>
        <div class="title pt-4 pb-1 px-3 text-center">${product.title}</div>
        <div class="d-flex align-content-center justify-content-center">
        ${product.rating.rate < 1 ? '<span class="fas fa-star"></span> ' : ''}
        ${product.rating.rate > 1 ? '<span class="fas fa-star"></span>' : ''} 
        ${product.rating.rate > 2 ? '<span class="fas fa-star"></span> ' : ''} 
        ${product.rating.rate > 3 ? '<span class="fas fa-star"></span>' : ''}  
        ${product.rating.rate > 4 ? '<span class="fas fa-star"></span> ' : ''}   
        ${product.rating.rate >= 5 ? '<span class="fas fa-star"></span> ' : ''}  
        </div>
        <div class="price">$ ${product.price}</div>
      </div> 
    `
    jeweleryProductList.append(singleitem)
  }
}


// call product details api
const productDetails = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => productsWiseDetails(data))
}
// show product details in modal
const productsWiseDetails = (data) => {
  console.log(data);
  const productTitle = document.getElementById('productTitle')
  productTitle.innerText = data.title.slice(0, 50)
  const productDetailsCard = document.getElementById('product-details-card');
  productDetailsCard.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <div class="images p-3">
          <div class="text-center p-4"> <img id="main-image" src="${data.image}"
              width="250" /> </div>
          
        </div>
      </div>
      <div class="col-md-6">
        <div class="product p-4">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span
                class="ms-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
          </div>
          <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">${data.category}</span>
            <h5 class="text-uppercase">${data.title}</h5>
            <div class="price d-flex flex-row align-items-center"> <span class="act-price">$${data.price}</span>
              <div class="ms-2"> <del class="dis-price text-warning">$${data.price}</del> <span>40% OFF</span> </div>
            </div>
          </div>
          <p class="about">${data.description}</p>
          <div class="sizes mt-5">
            <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size"
                value="S" checked> <span>S</span> </label> <label class="radio"> <input type="radio"
                name="size" value="M"> <span>M</span> </label> <label class="radio"> <input type="radio"
                name="size" value="L"> <span>L</span> </label> <label class="radio"> <input type="radio"
                name="size" value="XL"> <span>XL</span> </label> <label class="radio"> <input type="radio"
                name="size" value="XXL"> <span>XXL</span> </label>
          </div>
          <div class="cart mt-4 align-items-center"> <button
              class="btn btn-primary text-uppercase me-2 px-4">Add to cart</button>
              <button class="btn btn-danger text-uppercase me-2 px-4"><i class="fa fa-heart"></i></button>
              <button class="btn btn-info text-uppercase me-2 px-4">  <i class="fa fa-share-alt"></i></button>
              
          </div>
        </div>
      </div>
    </div>
    `
}