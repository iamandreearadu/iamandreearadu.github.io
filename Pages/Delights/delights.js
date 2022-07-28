/*
    GLOBAL VARIABLES
*/

var arrayDelights = [];
var userDelights = [];
const delightTmpContainer = document.getElementById("templateDelights");
const itemPerPage = document.getElementById("inputGroupSelect02");
const itemSortByPrice = document.getElementById("inputGroupSelect03");
const loadMore = document.getElementById("loadmore");

/* GLOBAL VARIABLES */
//console.log(itemPerPage.value);
// function checkUserCart() {
//   const cartOfDelights = localStorage.getItem("Cart");

//   if (
//     cartOfDelights !== null ||
//     cartOfDelights !== undefined ||
//     cartOfDelights !== ""
//   ) {
//   }
// }

function checkUserDelights() {
  const savedDelights = localStorage.getItem("Delights");
  if (
    savedDelights !== null ||
    savedDelights !== undefined ||
    savedDelights !== ""
  ) {
  }
}

/* SAVE/ UNSAVE DELIGHTS FUNCTION */
function updateDelight(idDelight, actionType) {
  let savedDelights = localStorage.getItem("Delights");

  switch (actionType) {
    case "Remove":
      if (savedDelights.includes("-")) {
        let splitedSavedDelights = [...savedDelights.split("-").map(Number)];
        const indexToRemove = splitedSavedDelights.indexOf(idDelight);
        splitedSavedDelights.splice(indexToRemove, 1);

        if (splitedSavedDelights.length === 1) {
          window.localStorage.setItem("Delights", splitedSavedDelights[0]);
        } else {
          let newDelights = splitedSavedDelights[0];

          for (let i = 1; i < splitedSavedDelights.length; i++) {
            newDelights += "-" + splitedSavedDelights[i];
          }
          window.localStorage.setItem("Delights", newDelights);
        }
      } else {
        window.localStorage.removeItem("Delights");
      }

      break;
    case "Save":
      if (
        savedDelights !== null &&
        savedDelights !== undefined &&
        savedDelights !== ""
      ) {
        window.localStorage.setItem(
          "Delights",
          savedDelights + "-" + idDelight
        );
      } else {
        window.localStorage.setItem("Delights", idDelight);
      }
      break;
    default:
      break;
    // code block
  }

  loadDelights(arrayDelights.slice(0, itemPerPage.value));
}
/* SAVE/ UNSAVE DELIGHTS FUNCTION */

/* CHOOSE HOW MANY TO DISPLAY FUNCTION */
itemPerPage.addEventListener("change", function (e) {
  // itemPerPage.value
  // arrayDelights
  loadDelights(arrayDelights.slice(0, itemPerPage.value));
});
/* CHOOSE HOW MANY TO DISPLAY FUNCTION  */

/* LOAD DELIGHTS FUNCTION  */
const loadDelights = function (array) {
  delightTmpContainer.innerHTML = "";

  let delightStorage = localStorage.getItem("Delights");
  let savedDelights = [];

  if (
    delightStorage !== null &&
    delightStorage !== undefined &&
    delightStorage !== ""
  ) {
    savedDelights = [
      ...localStorage.getItem("Delights").split("-").map(Number),
    ];
  }
  let btnSaveDel = "";

  array.forEach((delight, idx) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    if (savedDelights.includes(delight.id)) {
      btnSaveDel = "Remove";
    } else {
      btnSaveDel = "Save";
    }

    // Construct card content
    const content = `
      <div class="col-md-4 col-sm-12 p-3 ">
        <div class="card" style="width: 100%; box-shadow: 5px 5px #e4e4e4;">
            <img class="card-img-top" src="${delight.photoUrl}" alt="${delight.title}" />
            <div class="card-body">
                <h5 class="card-title">${delight.title} <img style="float:right;height:${delight.typeImgHeight};width:${delight.typeImgWidth}" src="${delight.typeImg}" /> </h5>
             
                <h5 class="showprice-btn">${delight.price}</h5>
                <a  onclick="updateDelight(${delight.id}, '${btnSaveDel}')" class="btn btn-light btn-del">${btnSaveDel}</a>
                <a class="btn btn-light btn-del ml-4">Add to cart</a>
                <a class="btn btn-light btn-del" style="float:right">Review</a>
          </div>
        </div>
      </div>
    `;

    // Append newyly created card element to the container
    delightTmpContainer.innerHTML += content;
  });
};
/* LOAD DELIGHTS FUNCTION */

/* JSON FUNCTION */
function createArrayDelights() {
  $.getJSON("/JSONFiles/Delights/cards.json", (cards) => {
    cards.forEach((card, i) => {
      arrayDelights.push(card);
    });
  });
}
/* JSON FUNCTION */

createArrayDelights();
loadDelights(arrayDelights.slice(0, itemPerPage.value));

/* LOAD MORE FUNCTION */
loadMore.addEventListener("click", function (e) {
  loadDelights(arrayDelights);
});
/* LOAD MORE FUNCTION */

/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Refactorizare delights. 
      a. Creeaza in JSONFiles/Delights un fisier delights.json in care sa ai toate obiectele delights. 
      b. Creeaza o metoda getDelightsFromJson() care sa citeasca din json si sa le puna in arrayul =>  'arrayDelights' 
        (declarat mai sus si care e folosit acum)
  
    2. Adauga pt obiectul delights mai multe informatii -> de exemplu:  Pret | descriere scurta | rating | gramaj 
    3. Asa cum ai creeat dropdown cu 'Choose how many to display' mai adauga inca alte filtre
      de exemplu: sa sortezi dupa pret | dupa categorii (Raw Vegan, Non Vegan etc) | si dupa gramaj

    SCOP =>   Sa simulam un caz pe cat real putem
              Sa te obisnuiesti cu ideea de obiecte si proprietati

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/
