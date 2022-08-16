
function getInputValue(inputId) {
   const inputField = document.getElementById(inputId)
   const inputAmountText = inputField.value
   const amountValue = parseFloat(inputAmountText)
   inputField.value = '';
   return amountValue;

}

function updateTotalField(totalFieldId, amount) {
   const depositTotal = document.getElementById(totalFieldId);
   const depositTotalText = depositTotal.innerText;
   const previousTotalAmount = parseFloat(depositTotalText)
   depositTotal.innerText = previousTotalAmount + amount;
}


function getCurrentbalance() {
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText
   const previousBalanceTotal = parseFloat(balanceTotalText)

   return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
   const balanceTotal = document.getElementById('balance-total');

   const previousBalanceTotal = getCurrentbalance();

   if (isAdd == true) {
      balanceTotal.innerText = previousBalanceTotal + amount
   } else {
      balanceTotal.innerText = previousBalanceTotal - amount
   }

}




document.getElementById('deposit-btn').addEventListener('click', function () {

   const amountValue = getInputValue('deposit-input')

   if (amountValue > 0) {
      updateTotalField('deposit-total', amountValue)
      updateBalance(amountValue, true)
   }



})

document.getElementById('withdraw-btn').addEventListener('click', function () {

   const withdrawAmount = getInputValue('withdraw-input')

   const currentBalance = getCurrentbalance()

   if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      updateTotalField('withdraw-total', withdrawAmount)
      updateBalance(withdrawAmount, false)
   }

   if (withdrawAmount > currentBalance) {
      alert('You Cannot withdraw more then your Balance')
   }


})