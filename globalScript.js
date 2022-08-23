$.ajaxSetup({
  async: false,
});

var loginBtn = document.getElementById("mySecNavLogin");
var registerBtn = document.getElementById("mySecNavRegister");
var myAccountBtn = document.getElementById("mySecNavMyAccount");
var logoutBtn = document.getElementById("mySecNavLogout");
var carouselContainer = document.getElementById("mycarouselInner");
var interestsContainer = document.getElementById("myAreasOfInterests");
var descriptionContainer = document.getElementById("descriptionArea");

function isUserLoggedIn() {
  // Credentials - declarat in login.js
  const cred = localStorage.getItem("Credentials");

  if (cred != null && cred != "") {
    return true;
  } else {
    return false;
  }
}

function logout() {
  localStorage.removeItem("Credential");
}

const displayUserMenu = function (isView) {
  if (isView) {
    myAccountBtn.classList.remove("d-none");
    logoutBtn.classList.remove("d-none");
    loginBtn.classList.add("d-none");
    registerBtn.classList.add("d-none");
  } else {
    myAccountBtn.classList.add("d-none");
    logoutBtn.classList.add("d-none");
    loginBtn.classList.remove("d-none");
    registerBtn.classList.remove("d-none");
  }

  //   let myObj = JSON.parse("JSONFiles/Index/carousel.json");
  //   console.log(myObj);
};

/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Refactor Carousel - Datele sa fie luate din JSONFiles/Index/carousel.json
        a. Modifica carousel.json si adaugae toate Obiectele de care ai nevoie cu proprietatiile lor
        b. Creeaza o functie javascript care citeste din fisier obiectele si le pune intr-un array
            -> Ex: var carouselArray = [];
        c. Creeaza o alta functie JavaScript care itereaza pe array ( foreach ) si le afiseaza (injecteaza) in html
         ( Avem un div geeneral la care ii luam id-ul si ii adaugam content | am mai facut amandoi pe 'delights')
    
    2. IDEM pt zona de sub carousel ( vezi id -> indexShortLinks pe index.html) + adauga fisier indexShortLinks.json 
    3. IDEM pt zona urmatoare (vezi id -> featurette ) + adauga fisier featurette.json

    SCOP =>    Vrem ca toate datele ce le afisezi slidere | poze | titluri | texte sa vina din fisiere JSON
                Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

//TRYING HOVER OVER THE NAVBAR
// const nav = document.querySelector(".navbar-nav");
// const handleHoverMenuTabs = function (e, opacity) {
//   if (e.target.classList.contains(".nav-link")) {
//     const link = e.target;
//     const siblings = link.closest(".navbar-nav").querySelector(".nav-link");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//   }
// };
// nav.addEventListener("mouseover", function (e) {
//   handleHoverMenuTabs(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHoverMenuTabs(e, 1);
// });

/* TOGGLE FUNCTION */
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const loginBtnClass = document.querySelector(".btn-login");
navToggle.addEventListener("click", function () {
  loginBtnClass.classList.toggle("ml-5");
  links.classList.toggle("show-links");
});
