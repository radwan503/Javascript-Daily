// get form id 
const paymentMethod = document.getElementById('paymentMethod');
const cardNumber = document.getElementById('cardNumber');
const cardAmount = document.getElementById('cardAmount');
const currentDate = document.getElementById('currentDate');
const cardVerificationValueCode = document.getElementById('cardVerificationValueCode');
const cardName = document.getElementById('cardName');
const submitBtn = document.getElementById('submitBtn');
const currentAmount = document.getElementById('currentAmount');
const summaryName = document.getElementById('summaryName');

//get form value click submit
submitBtn.addEventListener('click', function () {

   if (paymentMethod.value === 'visa') {
      //insert form value in visa card
      const visaCardId = document.getElementById('visaCardId');
      const visaCardExpiryDate = document.getElementById('visaCardExpiryDate');
      const visaCardName = document.getElementById('visaCardName');
      const visaCardAmount = document.getElementById('visaCardAmount');


      visaCardId.innerHTML = cardNumber.value;
      visaCardExpiryDate.innerText = currentDate.value;
      visaCardName.innerText = cardName.value;
      visaCardAmount.innerText = cardAmount.value;

      // balance 
      const currentBalance = parseFloat(currentAmount.innerText)
      console.log(currentBalance)
      const balanceTotal = currentBalance - cardAmount.value;
      console.log(balanceTotal)
      currentAmount.innerText = balanceTotal;
      summaryName.innerText = cardName.value;


   } else if (paymentMethod.value === 'mastercard') {

      //insert form value in master card
      const masterCardId = document.getElementById('masterCardId');
      const masterCardExpiryDate = document.getElementById('masterCardExpiryDate');
      const masterCardName = document.getElementById('masterCardName');
      const masterCardAmount = document.getElementById('masterCardAmount');

      masterCardId.innerHTML = cardNumber.value;
      masterCardExpiryDate.innerText = currentDate.value;
      masterCardName.innerText = cardName.value;
      masterCardAmount.innerText = cardAmount.value;

      // balance 
      const currentBalance = parseFloat(currentAmount.innerText)
      console.log(currentBalance)
      const balanceTotal = currentBalance - cardAmount.value;
      console.log(balanceTotal)
      currentAmount.innerText = balanceTotal;
      summaryName.innerText = cardName.value

   } else if (paymentMethod.value === 'discover') {

      //insert form value in discovery card
      const discoveryCardId = document.getElementById('discoveryCardId');
      const discoveryCardExpiryDate = document.getElementById('discoveryCardExpiryDate');
      const discoveryCardName = document.getElementById('discoveryCardName');
      const discoveryCardAmount = document.getElementById('discoveryCardAmount');

      discoveryCardId.innerHTML = cardNumber.value;
      discoveryCardExpiryDate.innerText = currentDate.value;
      discoveryCardName.innerText = cardName.value;
      discoveryCardAmount.innerText = cardAmount.value


      // balance 
      const currentBalance = parseFloat(currentAmount.innerText)
      console.log(currentBalance)
      const balanceTotal = currentBalance - cardAmount.value;
      console.log(balanceTotal)
      currentAmount.innerText = balanceTotal;
      summaryName.innerText = cardName.value

   } else {
      alert('please select payment method')
   }


})


// chage balance based on card type

paymentMethod.addEventListener('change', function () {
   if (paymentMethod.value === 'visa') {
      currentAmount.innerText = '320'
   } else if (paymentMethod.value === 'mastercard') {
      currentAmount.innerText = '1500'
   } else if (paymentMethod.value === 'discover') {
      currentAmount.innerText = '500'
   }
})



