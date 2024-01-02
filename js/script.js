// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik 
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik diluar slidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.targer)) {
        navbarNav.classList.remove('active');
    }
})