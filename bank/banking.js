document.getElementById('deposit-btn').addEventListener('click', function () {
   // get deposit value
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText)

   //deposit
   const depositTotal = document.getElementById('deposit-total');

   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText)

   const newDepositTotal = newDepositAmount + previousDepositAmount
   // total deposit show 
   depositTotal.innerText = newDepositTotal;

   //update balance amount
   const balanceTotal = document.getElementById('balance-total');
   balanceTotal.innerText = newDepositTotal;


   //clear deposit input
   depositInput.value = ''

})



document.getElementById('withdraw-btn').addEventListener('click', function () {
   const withdrawInput = document.getElementById('withdraw-input')
   const withdrawAmountText = withdrawInput.value;
   const newWithDrawAmount = parseFloat(withdrawAmountText)

   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawText = withdrawTotal.innerText
   const previousWithdrawTotal = parseFloat(previousWithdrawText)

   const newWithDrawTotal = newWithDrawAmount + previousWithdrawTotal

   withdrawTotal.innerText = newWithDrawTotal;

   const balanceTotal = document.getElementById('balance-total');
   const previousBalanceText = parseFloat(balanceTotal.innerText)
   const previousBalanceTotal = previousBalanceText - newWithDrawTotal
   balanceTotal.innerHTML = previousBalanceTotal

   // clear withdraw input
   withdrawInput.value = ''
})
