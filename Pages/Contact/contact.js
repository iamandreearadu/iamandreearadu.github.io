/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Creeaza o functie care ataseaza un eveniment la un buton si care citeste datele de pe formular
         -->> Pune toate formularele intr-un array de obiecte. 
    2. Creeaza o pagina noua unde sa afisezi toate datele din array sub forma de lista
    3. Pe pagina noua creeaza buton pentru a sterge cate un obiect de pe fieacare rand dar si un buton care sterge toate obiectele
    4. Creeaza un dropdown prin care sa afisezi 3-6 sau toate obiectele (load more) ca pe delights.html 

    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

const itemForm = document.getElementById("submitForm");
var formArray = [];
var contactObject = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

itemForm.addEventListener("click", function (e) {
  debugger;
  let formModel = document.getElementById("contact-form").elements;

  //   for(var i = 0 ; i < elements.length ; i++){
  //     var item = elements.item(i);
  //     obj[item.name] = item.value;
  // }

  contactObject.name = formModel.item(0).value;
  contactObject.email = formModel.item(1).value;
  contactObject.subject = formModel.item(2).value;
  contactObject.message = formModel.item(3).value;

  /* VERSION NUMEROS 2
    const nameForm = document.getElementById("name");
    const emailForm = document.getElementById("email");
    const subjectForm = document.getElementById("subject");
    const messageForm = document.getElementById("message");

    contactObject.name = nameForm.value;
    contactObject.email = emailForm.value;
    contactObject.subject = subjectForm.value;
    contactObject.message = messageForm.value;

    */

  let formContact = localStorage.getItem("Formular");
  let arrayFormContact = JSON.parse(formContact);
  formArray = [];

  if (arrayFormContact !== null) {
    arrayFormContact.forEach((obj) => {
      formArray.push(obj);
    });
  }

  formArray.push(contactObject);
  let cObjectJSON = JSON.stringify(formArray);
  window.localStorage.setItem("Formular", cObjectJSON);
});
