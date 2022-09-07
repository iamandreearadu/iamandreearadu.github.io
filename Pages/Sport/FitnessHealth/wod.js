var arrayWod = [];

const wodContainer = document.getElementById("templateWods");

const loadWods = function (arrayWod) {
  wodContainer.innerHTML = "";
  arrayWod.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  arrayWod.forEach((element, idx) => {
    let card = document.createElement("div");
    card.classList = "card-body";

    const idImg = "img" + idx;
    let dateSplit = element.date.split(",");
    let wodElementDate = new Date(dateSplit[0], dateSplit[1], dateSplit[2]);

    let content = `
    
    <div class="cards col-md-6 col-sm-12 col-lg-4">
        <div class="card">
        <a href="#" data-toggle="modal" data-target="#exampleModal">
          <img  class="card-img-top overlay" id="${idImg}"
            data-toggle="popover-hover"
              src="${element.photoUrl}"
              alt="${element.title}"/>
          </a>
          <div class="card-body">
            <p>
              <h4>${element.title}</h4>
              <div class="today-date">${wodElementDate.toDateString()}</div>
            </p>
          </div>
      </div>
    </div>`;

    wodContainer.innerHTML += content;

    $("#exampleModal").on("show.bs.modal", function (event) {
      console.log(element.photoUrl);
      var picture = document.getElementsByClassName("modal-card-img");
      picture[0].src = element.photoUrl;
    });
  });
};

function wodList() {
  $.getJSON("/JSONFiles/Wod/wodList.json", (wods) => {
    wods.forEach((wod, i) => {
      arrayWod.push(wod);
    });
  });
}
wodList();
//createArrayWod();
loadWods(arrayWod);

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
