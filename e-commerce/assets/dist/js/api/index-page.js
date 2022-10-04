const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(responseData => showProductInHtml(responseData))
}
getAllProducts()

const showProductInHtml = (responseData) =>{
   //console.log(responseData);
   const productList = document.getElementById('productList');
   

   for(const item of responseData){
    //console.log(item)
    const singleitem =  document.createElement('div');
    singleitem.classList.add('col-lg-3', 'col-sm-6')
    singleitem.innerHTML = `
    <div class="card d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div class="product ">
            <img class="px-3 pt-3 shadow " src="${item.image}"
            alt="${item.title}">
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            <li class="icon" onclick="productDetails(${item.id})"><span class="fas fa-eye"></span></li>
            <li class="icon mx-3"><span class="far fa-heart"></span></li>
            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            </ul>
        </div>
        <div class="tag bg-red">sale</div>
        <div class="title pt-4 pb-1 px-3 text-center">${item.title}</div>
        <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span
            class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span
            class="fas fa-star"></span> </div>
        <div class="price">$ ${item.price}</div>
    </div>
    `
    productList.append(singleitem)
   }
}

// product details
const productDetails = (id) =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
} 