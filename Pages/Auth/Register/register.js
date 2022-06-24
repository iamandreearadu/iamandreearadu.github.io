$.ajaxSetup({
    async: false
});

var credentials = {
    email: "",
    password: "",
  };

  
function registerBtn() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
  
    if (isUserLoggedIn()) {
      alert("Deja este logat");
      // SA pui aici URL-ul tau principal
      window.location.replace("http://127.0.0.1:5501");
      return;
    }
  
    if (email == "" || password == "") {
      alert("Trebuie sa introduci datele complete");
    } else {
  
      let isUsed = false;
  
      $.getJSON('./Login/users.json', (users) => {
        users.forEach(user  => {
            console.log(user);
          if (user.email === email) {
            isUsed = true;
          }
        });
      });
  
      if (isUsed) {
        alert("Adresa de email deja folosita. Introdu alta!");
      } else {
        credentials.email = email;
        credentials.password = password;
        var cred = JSON.stringify(credentials);
        window.localStorage.setItem("Credentials", cred);
        // SA pui aici URL-ul tau principal
        window.location.replace("http://127.0.0.1:5501/");
      }
  
    }
}
  