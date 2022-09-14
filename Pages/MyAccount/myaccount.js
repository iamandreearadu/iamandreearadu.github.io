/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. MyAccount View Sidebar
        a. Sa aranjezi partea de myaccount.html - responsive si design partea de Sidebar doar
    2. Profile Edit
        a. Modificarea datelor din profil (Fullname, picture, phone etc) se va face apeland o metoda js
        b. Creeaza un buton care va comuta din Edit Mod in View Mode pe pagina
        c. Metoda js va salva toate datele astea in localStorage ( Vezi cum se intampla cu login.js cand se salveaza email si password) 
        d. Afiseaza un buton de Save sau update.
        e. Butonul va apela o metoda js care va actualiza datele din localStorage
        f. Datele atunci cand esti in View Mode se vor citi din localStorage
        g. In View mode no sa fie Input Elements si Label Elements
        h. In Edit Mode vor fi Input Element si nu Label Elements ca sa poti modifica sau introduce date noi
    3. My Wods
        a. Asa cum am spus si pe wod.js vei avea un array -> userWod ce l vezi folosi sa afisezi o lista aici
            - Genul cum e cea de MyOrders sau Saved Itemes de pe myAccount.hmtl
        b. Odata afisate asa cum am mentionat si pe wod.js sa ai un buton ce sterge din array
    4. My Account
        a. Faci o pagina unde sa pot schimba datele personale (email si parola)
        b. Dupa ce ai facut design-ul adica HTML => Creezi o metoda prin care pe un button de 'save'
        sa iti iei datele folosind document.getElementById
        c. Metoda creeata pentru modificarea la email si parola va trebuie sa faca niste verificari: 
            cc. Daca adresa nou de email introdusa este deja folosita , adica verifici in users.json
                - asta deja se intampla pe login.js si register.js
            ccc. Verifici daca a introdus ceva si nu a lasat casuta goala
            cccc. Dazca totul este in regula va trebui sa modifici localStorage cu noile date
            => Noul obiect Credentials ( Vezi login.js si register.js)
    5. Sign Out
        a. Trebuie sa faci legatura butonului cu metoda deja creeata de logout - signout 
        ( Vezi butonul de pe navbar)

    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/
var arrayDetails = [];
const detailsContainer = document.getElementById("details-container");

const loadDetails = function (array) {
  detailsContainer.innerHTML = "";

  array.forEach((detail, idx) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    let content = `<div class="card-body">
    <div class="row">
      <div class="col-sm-3">
        <p class="mb-0">Full Name</p>
      </div>
      <div class="col-sm-9">
        <p class="text-muted mb-0">${detail.fullName}</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-3">
        <p class="mb-0">Email</p>
      </div>
      <div class="col-sm-9">
        <p class="text-muted mb-0">
        ${detail.email}
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-3">
        <p class="mb-0">Phone</p>
      </div>
      <div class="col-sm-9">
        <p class="text-muted mb-0">${detail.phone}</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-3">
        <p class="mb-0">Date of birth</p>
      </div>
      <div class="col-sm-9">
        <p class="text-muted mb-0">${detail.dateOfBirth}</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-3">
        <p class="mb-0">Address</p>
      </div>
      <div class="col-sm-9">
        <p class="text-muted mb-0">${detail.adress}</p>
      </div>
    </div>
  </div>`;
    detailsContainer.innerHTML += content;
  });
};

function getDetailsProfile() {
  $.getJSON("/JSONFiles/Auth/users.json", (details) => {
    details.forEach((detail, i) => {
      arrayDetails.push(detail);
    });
  });
}

getDetailsProfile();
loadDetails(arrayDetails);
