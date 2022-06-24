//https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1

/*
    GLOBAL VARIABLES
*/

var arrayDelights = [];
const delightTmpContainer = document.getElementById("templateDelights");
const itemPerPage = document.getElementById("inputGroupSelect02");
const loadMore = document.getElementById("loadmore");

console.log(itemPerPage.value);

itemPerPage.addEventListener("change", function (e) {
  // itemPerPage.value
  // arrayDelights
  loadDelights(arrayDelights.slice(0, itemPerPage.value));
});

/*
    METHODDS
*/

const createArrayDelights = function () {
  let d1 = {
    id: 1,
    photoUrl: "/Resources/DelightsNest/choux_la_craquelin.jpg",
    title: "Choux la Craquelin",
    description: "Non Vegan",
  };

  let d2 = {
    id: 2,
    photoUrl: "/Resources/DelightsNest/lavander_cheesecake.jpg",
    title: "Lavander Cheesecake",
    description: "Raw Vegan",
  };
  let d3 = {
    id: 3,
    photoUrl: "/Resources/DelightsNest/snickers_slice.jpg",
    title: "Snickers Slice",
    description: "Non Vegan",
  };
  let d4 = {
    id: 4,
    photoUrl: "/Resources/DelightsNest/raspberry_brownie.jpg",
    title: "Raspberry Brownie",
    description: "Non Vegan",
  };
  let d5 = {
    id: 5,
    photoUrl: "/Resources/DelightsNest/coffee_slice.jpg",
    title: "Raw Vegan Coffee Slice",
    description: "Raw Vegan",
  };
  let d6 = {
    id: 6,
    photoUrl: "/Resources/DelightsNest/biscuits.jpg",
    title: "Marshmallow & Walnuts Delights",
    description: "Non Vegan",
  };
  let d7 = {
    id: 7,
    photoUrl: "/Resources/DelightsNest/caramel_slice.jpg",
    title: "Raw Vegan Caramel Slice",
    description: "Raw Vegan",
  };
  let d8 = {
    id: 8,
    photoUrl: "/Resources/DelightsNest/raspberry_cacao_slice.jpg",
    title: "Raw Vegan Raspberry & Cacao Slice",
    description: "Raw Vegan",
  };
  let d9 = {
    id: 9,
    photoUrl: "/Resources/DelightsNest/mango_cheesecake.jpg",
    title: "Raw Vegan Mango Cheesecake",
    description: "Raw Vegan",
  };
  let d10 = {
    id: 10,
    photoUrl: "/Resources/DelightsNest/raspberrylemon_cake2.jpeg",
    title: "Raspberry and Lemon Cake",
    description: "Non Vegan",
  };

  arrayDelights.push(d10);
  arrayDelights.push(d1);
  arrayDelights.push(d2);
  arrayDelights.push(d3);
  arrayDelights.push(d4);
  arrayDelights.push(d5);
  arrayDelights.push(d6);
  arrayDelights.push(d7);
  arrayDelights.push(d8);
  arrayDelights.push(d9);
};

const loadDelights = function (array) {
  delightTmpContainer.innerHTML = "";

  array.forEach((delight, idx) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    // Construct card content
    const content = `
      <div class="col-md-4 col-sm-12 p-3 ">
        <div class="card" style="width: 100%; box-shadow: 5px 10px #e4e4e4;">
            <img class="card-img-top" src="${delight.photoUrl}" alt="${delight.title}" />
            <div class="card-body">
                <h5 class="card-title">${delight.title}</h5>
                <p class="card-text">${delight.description}</p>
                <a href="#" class="btn btn-primary" style="background-color:#343a40; border:1px solid white">Get Recipe</a>
          </div>
        </div>
      </div>
    `;

    // Append newyly created card element to the container
    delightTmpContainer.innerHTML += content;
  });
};

/*
    Container
*/

createArrayDelights();
loadDelights(arrayDelights.slice(0, itemPerPage.value));

loadMore.addEventListener("click", function (e) {
  loadDelights(arrayDelights);
});
