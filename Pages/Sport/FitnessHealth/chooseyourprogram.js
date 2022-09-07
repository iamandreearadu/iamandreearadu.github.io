/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Pe pagina asta de programare fa-o ca un fel de prezentare
        a. Sa fie slidere
        b. sa fie zone de descriere cu poze
        c. sa fie zone cu o lista in care enumeri lucrurile pozitive
        d. sa fie o zona cu testimoniale | cauta pe net exemple ex:  testimonials pages template
    2. Fiecare informatie sa nu fie pusa direct in html si creeaza pentru fiecare un fisier json
        - In JSONFiles/ChooseYourProgramm/sliders.json
        - In JSONFiles/ChooseYourProgramm/advantages.json
    3. Creeaza o metoda pentru fiecare dintre fisierele json si array-uri
    4. Apoi pentru fiecare dintre array-uri creeaza o metoda pentru a parcurge array-ul si a popula cu html
        ca in exemplu de pe (delights)


    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

var slideProgramsContainer = document.getElementById("rowPrograms");
var describeProgramsContainer = document.getElementById("describeProgramsArea");

var programsArray = [];

const loadPrograms = function (array) {
  slideProgramsContainer.innerHTML = "";
  let activeClass = "";

  array.forEach((slide, idx) => {
    let slideProgram = document.createElement("div");
    slideProgram.classList = "program-item";

    let content = `
    <div class="program-item ">
      <div class="card card-item">
          <div class="face front-face">
              <h2>${slide.name}</h2>
              <h2 >${slide.price}</h2>
              <h4> ${slide.title}</h4>
          </div>
            <div class="face back-face">
              <h4>${slide.bonus}</h4>
            </div>
      </div>
    </div>      
`;
    slideProgramsContainer.innerHTML += content;
  });
};

function programsJson() {
  $.getJSON("/JSONFiles/CYP/programs.json", (programs) => {
    programs.forEach((progr, ind) => {
      programsArray.push(progr);
    });
  });
}

programsJson();
loadPrograms(programsArray);

var programsDescribeArray = [];

const loadDescribePrograms = function (array) {
  describeProgramsContainer.innerHTML = "";
  let classText = "";
  let classImg = "";

  array.forEach((area, idx) => {
    let describeArea = document.createElement("div");
    describeArea.classList = "featurette";

    let content = `
    <div class=" featurette " id="featurette" style="background-image:url(${area.picture})">
        <div class=" ${classText}">
            <h1>
              ${area.sectionName}
            </h1>
            <h2>
              ${area.description}
            </h2>
        </div>
        
    </div>
    `;

    describeProgramsContainer.innerHTML += content;
  });
};

function describeProgramsJson() {
  $.getJSON("/JSONFiles/CYP/describeProgr.json", (programs) => {
    programs.forEach((area, ind) => {
      programsDescribeArray.push(area);
    });
  });
}
describeProgramsJson();
loadDescribePrograms(programsDescribeArray);
