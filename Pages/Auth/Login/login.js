$.ajaxSetup({
  async: false,
});

var credentials = {
  email: "",
  password: "",
};

function submitLogin() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (isUserLoggedIn()) {
    alert("Deja este logat");
    // SA pui aici URL-ul tau principal
    window.location.replace("/index.html");
    return;
  }

  if (email == "" || password == "") {
    alert("Trebuie sa introduci datele complete");
  } else {
    let isValidated = false;

    $.getJSON("/JSONFiles/Auth/users.json", (users) => {
      users.forEach((user) => {
        if (user.email === email && user.password === password) {
          isValidated = true;
        }
      });
    });

    if (isValidated) {
      credentials.email = email;
      credentials.password = password;
      var cred = JSON.stringify(credentials);
      window.localStorage.setItem("Credentials", cred);
      // SA pui aici URL-ul tau principal
      window.location.replace("/index.html");
    } else {
      alert("Datele introduse sunt incorecte! Verifica fisierul users.json");
    }
  }
}
