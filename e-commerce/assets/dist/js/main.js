const navbarNav = document.querySelectorAll('.nav-link');
for (const iterator of navbarNav) {
    //console.log(iterator)
    iterator.addEventListener('click', function (e) {
        var current = document.querySelector(".active")
        if (current) {
            // then use classList to add/remove class names
            current.classList.remove('active')
        }
        e.currentTarget.classList.add('active');
    })
}