function pinCreate() {
   const pin = Math.round(Math.random() * 10000);
   const pinString = pin + '';
   console.log(pinString)
   if (pinString.length == 4) {
      return pin
   } else {
      console.log('3 digit')
      return pinCreate();
   }

}


function generatePin() {
   const showPinVal = document.getElementById('showPinInput');
   showPinVal.value = pinCreate()
}


document.getElementById('calculatorNumber').addEventListener('click', function (event) {

   const number = event.target.innerText;
   const keyboardField = document.getElementById('keyboardField');
   if (isNaN(number)) {
      if (number == 'C') {
         keyboardField.value = ''
      }
      if (number == '<') {
         keyboardField.value = keyboardField.value.substring(0, keyboardField.value.length - 1);
      }

   } else {
      const previousFiledValue = keyboardField.value;
      const currentFieldValue = previousFiledValue + number;
      keyboardField.value = currentFieldValue;

   }

});


function verifyPin() {
   const generatePinField = document.getElementById('showPinInput');
   const keyboardField = document.getElementById('keyboardField');



   const successAlert = document.getElementById('success-alert');
   const warningAlert = document.getElementById('warning-alert');

   if (generatePinField.value == '' || keyboardField.value == '') {
      alert('Please Generate your pin.')
   } else {
      if (generatePinField.value == keyboardField.value) {
         successAlert.style.display = 'block';
         warningAlert.style.display = 'none'
         setTimeout(() => {
            successAlert.style.display = 'none';

         }, 2000)

         window.location.href = "https://pay-method.netlify.app/";

      } else {
         successAlert.style.display = 'none';
         warningAlert.style.display = 'block';
         setTimeout(() => {
            warningAlert.style.display = 'none';
         }, 2000)
      }

   }

}