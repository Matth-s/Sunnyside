const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');


hamburger.addEventListener('click', function() {
    body.classList.toggle('deroulant');
})