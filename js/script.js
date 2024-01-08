// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik 
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form 
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

//Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document
  .querySelector("#shopping-cart-button")
  .addEventListener("click", function (e) {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  });


//Klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
         searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
         shoppingCart.classList.remove("active");
    }
});

//Contact From
const scriptURL = "https://script.google.com/macros/s/AKfycbzmN5sGsJ0e_ejG0TBlx0y51yzN_iObFb5eh4S8BCNJqA44fKqYlV-jAA-MrWflyA3tBQ/exec"
const form = document.forms["Company Sheet"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
      
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit diklik
  //tampilkan tombol loading, hilangkan tobmol kirim
  btnLoading.classList.toggle("d-none");
  btnSubmit.classListt.toggle("d-none");
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
    //tampilkan tombol kirim, hilangkan tombol loading 
    btnLoading.classList.toggle("d-none");
    btnSubmit.classList.toggle("d-none");
    //tampilkan alert
    myAlert.classList.toggle("d-none");
    //reset formnya 
    form.reset ();
    console.log('Success!', response);
   })
    .catch((error) => console.error('Error!', error.message));
});