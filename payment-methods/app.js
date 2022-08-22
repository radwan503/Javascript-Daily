// get form id 
const paymentMethod = document.getElementById('paymentMethod');
const cardNumber = document.getElementById('cardNumber');
const currentDate = document.getElementById('currentDate');
const cardVerificationValueCode = document.getElementById('cardVerificationValueCode');
const cardName = document.getElementById('cardName');
const submitBtn = document.getElementById('submitBtn');

//get form value click submit
submitBtn.addEventListener('click', function () {

   if (paymentMethod.value === 'visa') {
      //insert form value in visa card
      const visaCardId = document.getElementById('visaCardId');
      const visaCardExpiryDate = document.getElementById('visaCardExpiryDate');
      const visaCardName = document.getElementById('visaCardName');

      visaCardId.innerHTML = cardNumber.value;
      visaCardExpiryDate.innerText = currentDate.value;
      visaCardName.innerText = cardName.value;

   } else if (paymentMethod.value === 'mastercard') {

      //insert form value in master card
      const masterCardId = document.getElementById('masterCardId');
      const masterCardExpiryDate = document.getElementById('masterCardExpiryDate');
      const masterCardName = document.getElementById('masterCardName');

      masterCardId.innerHTML = cardNumber.value;
      masterCardExpiryDate.innerText = currentDate.value;
      masterCardName.innerText = cardName.value;

   } else if (paymentMethod.value === 'discover') {

      //insert form value in discovery card
      const discoveryCardId = document.getElementById('discoveryCardId');
      const discoveryCardExpiryDate = document.getElementById('discoveryCardExpiryDate');
      const discoveryCardName = document.getElementById('discoveryCardName');

      discoveryCardId.innerHTML = cardNumber.value;
      discoveryCardExpiryDate.innerText = currentDate.value;
      discoveryCardName.innerText = cardName.value;

   }


})