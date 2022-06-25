var arrayWod = [];
const delightTmpContainer = document.getElementById("templateWods");



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

/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Creeaza un fisier in JSONFiles/wod cu numele wod.json in care sa scrii obiectele wod 
      - adauga mai mutlte proprietati detaliu | timp program | nivelul de dificultate etc
    2. Creeaza o metoda prin care sa iei datele din fisier json si sa le pui intr-un array ex: 'wodList'
    3. Daca utilizatorul este logat afiseaza un buton 'Adauga'
    4. In momentul in care apasa pe butonul 'Adauga' sa i se adauge obiectul intr-un array ex:  myUserWod
    5. Pe pagina de MyAccount sa fie o sectiuni unde afisezi obiectele astea din lista
    6. Creeaza apoi un buton pt fiecare rand prin care utilizatorul poate sa dea remove din lista

    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

