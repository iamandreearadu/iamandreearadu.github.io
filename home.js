/* SLIDER 
var carouselArray = [];

const loadCarousel = function (array) {
  carouselContainer.innerHTML = "";
  let activeClass = "";

  array.forEach((slide, idx) => {
    let carusel = document.createElement("div");
    carusel.classList = "carousel-item";

    if (idx < 1) {
      activeClass = "active";
    } else {
      activeClass = "";
    }

    let contentCarousel = `
        <div class="carousel-item ${activeClass}" style="height:600px;">
            <img class="first-slide center h-${slide.pictureHeight} w-${slide.pictureWidth}"  src="${slide.picture}">
            <div class="container">
                <div class="carousel-caption text-left">
                    <h1 class="carousel-title">${slide.title} </h1>
                    <p class="carousel-subtitle">${slide.subtitle}</p>
                    <p><a class="btn btn-lg btn-primary" href="#" role="button">>${slide.btn}</a></p>
                </div>
            </div>
        </div>
    `;

    carouselContainer.innerHTML += contentCarousel;
  });
};

function carousel() {
  $.getJSON("/JSONFILES/Index/carousel.json", (slider) => {
    slider.forEach((slide, ind) => {
      carouselArray.push(slide);
    });
  });
}
carousel();
loadCarousel(carouselArray);

 SLIDER */

/* Interests */
var interestsArray = [];

const loadInterests = function (array) {
  interestsContainer.innerHTML = "";
  let btnScrollDown = "";

  array.forEach((interests, idx) => {
    let interest = document.createElement("div");
    interest.classList = "interest-area";

    if (idx === 0) {
      btnScrollDown = "btn-scrolldown--1";
    } else if (idx === 1) {
      btnScrollDown = "btn-scrolldown--2";
    } else if (idx === 2) {
      btnScrollDown = "btn-scrolldown--3";
    } else if (idx === 3) {
      btnScrollDown = "btn-scrolldown--4";
    }

    let contentInterest = `
      <div class="col-lg-3 interest-area ">
        <img
        class="rounded-circle"
        src="${interests.picture}"
        alt="Generic placeholder image"
        width="${interests.pictureWidth}"
        height="${interests.pictureHeight}"
        />
        <h3 class=" p-3">
        <a  onclick="myScrollDown()"
            class="btn-scrolldown ${btnScrollDown} pl-3 pr-3"
            role="button"
         > ${interests.titleBtn}
        </a>
        </h3>
       <p>${interests.message}</p>
       </div>`;
    interestsContainer.innerHTML += contentInterest;
  });
};

function interests() {
  $.getJSON("/JSONFILES/Index/interests.json", (interest) => {
    interest.forEach((int, i) => {
      interestsArray.push(int);
    });
  });
}
interests();
loadInterests(interestsArray);
/* Interests */

/* Description Interests*/
var descriptionArray = [];

const loadDescriptions = function (array) {
  descriptionContainer.innerHTML = "";
  let classText = "";
  let classImg = "";

  array.forEach((description, idx) => {
    let descriptions = document.createElement("div");
    descriptions.classList = "featurette";

    if (idx === 1 || idx === 3) {
      classText = "order-md-2";
      classImg = "order-md-1";
    } else {
      classText = "";
      classImg = "";
    }

    let contentDescription = `
    <div class="row featurette mt-5 pt-5" id="featurette">
        <div class="col-md-7 ${classText}">
            <h2 class="featurette-heading mb-5" id="${description.id}">
              ${description.titleSection}
            </h2>
            <p class="lead">
              ${description.description}
            </p>
        </div>
        <div class="col-md-5 ${classImg}">
            <img
              class="featurette-image img-fluid mx-auto"
              src="${description.picture}"
              alt="350x350"
              style="width: ${description.pictureWidth}; height: ${description.pictureHeight}"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1816b5567c8%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1816b5567c8%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.11499786376953%22%20y%3D%22261.13599967956543%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              data-holder-rendered="true"
            />
        </div>
    </div>
    `;
    descriptionContainer.innerHTML += contentDescription;
  });
};

function description() {
  $.getJSON("/JSONFILES/Index/descriptions.json", (descriptions) => {
    descriptions.forEach((description, i) => {
      descriptionArray.push(description);
    });
  });
}
description();
loadDescriptions(descriptionArray);
/* Description Interests */

const btnScrollTo1 = document.querySelector(".btn-scrolldown--1");
const section1 = document.querySelector("#section--1");

// Scrolling button 1

btnScrollTo1.addEventListener("click", function (e) {
  const sec1Scroll = section1.getBoundingClientRect();
  console.log(sec1Scroll);

  console.log(e.target.getBoundingClientRect());

  window.scrollTo(
    sec1Scroll.left + window.pageXOffset,
    sec1Scroll.top + window.pageYOffset
  );

  window.scrollTo({
    left: sec1Scroll.left + window.pageXOffset,
    top: sec1Scroll.left + window.pageYOffset,
    behavior: "smooth",
  });

  section1.scrollIntoView({ behavior: "smooth" });
});

const btnScrollTo2 = document.querySelector(".btn-scrolldown--2");
const section2 = document.querySelector("#section--2");

// Scrolling button 2
btnScrollTo2.addEventListener("click", function (e) {
  const sec2Scroll = section2.getBoundingClientRect();
  // console.log(sec2Scroll);

  // console.log(e.target.getBoundingClientRect());

  window.scrollTo(
    sec2Scroll.left + window.pageXOffset,
    sec2Scroll.top + window.pageYOffset
  );

  window.scrollTo({
    left: sec2Scroll.left + window.pageXOffset,
    top: sec2Scroll.left + window.pageYOffset,
    behavior: "smooth",
  });

  section2.scrollIntoView({ behavior: "smooth" });
});

const btnScrollTo3 = document.querySelector(".btn-scrolldown--3");
const section3 = document.querySelector("#section--3");

// Scrolling button 3
btnScrollTo3.addEventListener("click", function (e) {
  const sec3Scroll = section3.getBoundingClientRect();
  console.log(sec3Scroll);

  console.log(e.target.getBoundingClientRect());

  window.scrollTo(
    sec3Scroll.left + window.pageXOffset,
    sec3Scroll.top + window.pageYOffset
  );

  window.scrollTo({
    left: sec3Scroll.left + window.pageXOffset,
    top: sec3Scroll.left + window.pageYOffset,
    behavior: "smooth",
  });

  section3.scrollIntoView({ behavior: "smooth" });
});

const btnScrollTo4 = document.querySelector(".btn-scrolldown--4");
const section4 = document.querySelector("#section--4");

// Scrolling button 4
btnScrollTo4.addEventListener("click", function (e) {
  const sec4Scroll = section4.getBoundingClientRect();
  //console.log(sec4Scroll);

  console.log(e.target.getBoundingClientRect());

  window.scrollTo(
    sec4Scroll.left + window.pageXOffset,
    sec4Scroll.top + window.pageYOffset
  );

  window.scrollTo({
    left: sec4Scroll.left + window.pageXOffset,
    top: sec4Scroll.left + window.pageYOffset,
    behavior: "smooth",
  });

  section4.scrollIntoView({ behavior: "smooth" });
});

displayUserMenu(isUserLoggedIn());
