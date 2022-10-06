const productAdd = document.getElementById('productAdd');
const titleId = document.getElementById('titleId');
const categoryId = document.getElementById('categoryId');
const priceId = document.getElementById('priceId');
const descriptionId = document.getElementById('descriptionId');
const imageId = document.getElementById('imageId')
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})
productAdd.addEventListener('click', function (e) {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
            title: 'title',
            price: 120,
            description: 'description',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
    })
        .then(response => response.json())
        .then(responseData => showAddProduct(responseData));

    myModal.hide();

})

// categoryId select
categoryId.addEventListener('change', function () {
    categoryId.value;
});


const showAddProduct = (responseData) => {
    const singleProductItem = document.getElementById('singleProductItem');
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'single-product-item', 'mb-3');
    div.innerHTML = `
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${responseData.id}
            <span class="visually-hidden">unread messages</span>
        </span>
        <div class="row position-relative">
            <div class="col-md-2">
            <img src="${imageId.value}" class="flex-shrink-0 me-3" alt="..." width="100%">
            </div>

            <div class="col-md-8">
            <h6 class="font-weight-semibold fs-5">
                <a href="#" class="text-decoration-none headingTite" id="headingTite">${titleId.value}</a>
            </h6>

            <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                <li class="list-inline-item"><a href="#" class="text-muted text-decoration-none">${categoryId.value}</a></li>
            </ul>

            <p class="mb-3 title1">${descriptionId.value}</p>


            </div>

            <div class="col-md-2 mt-3 mt-lg-0 ml-lg-3 text-center">
            <h3 class="mb-0 font-weight-semibold">$ ${priceId.value}</h3>
            <div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <div class="text-muted">1985 reviews</div>
            <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning mt-4 text-white me-2" onclick=updateProduct(${responseData.id})> Update
            </button>
            <button class="btn btn-danger mt-4 text-white" onclick=delectProduct(${responseData.id})><i class="fa fa-trash"></i> </button>
            </div>
        </div>
    `
    singleProductItem.append(div)
    titleId.value = '';
    categoryId.value = '';
    priceId.value = '';
    descriptionId.value = '';
}

const updateProduct = (id) => {
    console.log(id)
    fetch(`https://fakestoreapi.com/products/6`, {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => dataInsertInModal(json))
}

const dataInsertInModal = (data) => {
    alert('Update Id Information Not Found' + data)
}


// delete product
const delectProduct = (id) => {
    console.log(id)
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))

    deleteApply()
}

function deleteApply() {
    const productItem = document.querySelectorAll('.single-product-item');
    for (const item of productItem) {
        item.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.parentNode.remove();
        })
    }
}