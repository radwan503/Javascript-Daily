function updateproductNumber(product, price, isIncrease) {
   const productInput = document.getElementById(product + '-number');
   let productNumber = parseInt(productInput.value);

   if (isIncrease == true) {
      productNumber = productNumber + 1;
   } else if (productNumber > 0) {
      productNumber = productNumber - 1;
   }

   productInput.value = productNumber;
   const productTotal = document.getElementById(product + 'Total');
   productTotal.innerText = productNumber * price;

   calculateTotal();

}


function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value)
   return productNumber;

}

function calculateTotal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalAmount = subTotal + tax;
   document.getElementById('subTotal').innerText = subTotal;
   document.getElementById('taxAmount').innerText = tax;
   document.getElementById('totalPrice').innerText = totalAmount;
}

//phone event
document.getElementById('phone-plus').addEventListener('click', function () {
   updateproductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
   updateproductNumber('phone', 1219, false)
})



// case event
document.getElementById('case-plus').addEventListener('click', function () {
   updateproductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
   updateproductNumber('case', 59, false)

});

const checkOut = document.getElementById('check-out');
checkOut.addEventListener('click', function () {
   window.location.href = 'checkout.html'
})