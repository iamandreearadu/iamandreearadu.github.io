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
    slideProgram.classList = "program-slide-item";

    let content = `
    <div class="col-lg-6 program-slide-item p-3">
    <div class="card card-item">
              <div class="face front-face">
              <h1>${slide.name}</h1>
              <h3 class="designation p-4">${slide.price}</h3>
                <h4 class="pt-3 text-uppercase name" style="text-align: center"> ${slide.title}</h4>
                
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

    if (idx === 1 || idx === 3) {
      classText = "order-md-2";
      classImg = "order-md-1";
    } else {
      classText = "";
      classImg = "";
    }

    let content = `
    <div class="row featurette col-lg-12 mt-3 p-2" id="featurette" style="background-image:url(${area.pictureBackround})">
        <div class="col-md-7 ${classText}">
            <h1 class="featurette-heading mb-5" id="${area.id}">
              ${area.sectionName}
            </h1>
            <p class="lead">
              ${area.description}
            </p>
        </div>
        <div class="thumbnail ${classImg}">
            <img
              class="featurette-image img-fluid mx-auto"
              src="${area.picture}"
              alt="350x350"
              style="width: ${area.pictureWidth}; height: ${area.pictureHeight}"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1816b5567c8%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1816b5567c8%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.11499786376953%22%20y%3D%22261.13599967956543%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              data-holder-rendered="true"
            />
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
