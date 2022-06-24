var arrayWod = [];
const delightTmpContainer = document.getElementById("templateWods");

var today = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// var date1 =
//   today.getDate() +
//   " " +
//   monthNames[today.getMonth()] +
//   " " +
//   today.getFullYear();
// document.getElementById("today-date").innerHTML = "";

// document.getElementById("today-date").innerHTML = date1;

const createArrayWod = function () {
  let w1 = {
    id: 1,
    photoUrl: "/Resources/Sport/wod3.jpg",
    date: new Date(2022, 06, 22),
    title: "22",
  };
  let w2 = {
    id: 2,
    photoUrl: "/Resources/Sport/wod2.png",
    date: new Date(2022, 06, 21),
    title: "SUPER LEGS",
  };
  let w3 = {
    id: 3,
    photoUrl: "/Resources/Sport/wod1.jpg",
    date: new Date(2022, 06, 20),
    title: "FCK FL",
  };

  arrayWod.push(w1);
  arrayWod.push(w2);
  arrayWod.push(w3);
};

const loadWods = function () {
  arrayWod.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  arrayWod.forEach((element, idx) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    const idImg = "img" + idx;

    const content = `
    
    <div class="col-md-4 col-sm-12 p-3 ">
        <div class="card mt-3 mb-3" style="width: 18rem">
        <a href="#" data-toggle="modal" data-target="#exampleModal">
          <img  class="card-img-top overlay" id="${idImg}"
            data-toggle="popover-hover"
              src="${element.photoUrl}"
              alt="${element.title}"/>
          </a>
          <div class="card-body">
            <p class="card-text">
              <h4>${element.title}</h4>
              <div class="today-date">${element.date.toDateString()}</div>
            </p>
          </div>
      </div>
    </div>`;

    delightTmpContainer.innerHTML += content;

    $("#exampleModal").on("show.bs.modal", function (event) {
      console.log(element.photoUrl);
      var picture = document.getElementsByClassName("modal-card-img");
      picture[0].src = element.photoUrl;
    });
  });
};

createArrayWod();
loadWods();
