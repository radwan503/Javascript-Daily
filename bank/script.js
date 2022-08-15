const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
   const email = document.getElementById('userEmail');
   const password = document.getElementById('userPassword');
   const user_email = email.value;
   const user_password = password.value;

   if (user_email == 'admin@gmail.com' && user_password == 'admin') {
      window.location.href = 'bank.html';
   }

})




