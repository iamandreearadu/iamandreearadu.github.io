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

      window.location.replace("/index.html");
    } else {
      alert("Datele introduse sunt incorecte! Verifica fisierul users.json");
    }
  }
}

function registerBtn() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (isUserLoggedIn()) {
    alert("Deja este logat");

    window.location.replace("/index.html");
    return;
  }

  if (email == "" || password == "") {
    alert("Trebuie sa introduci datele complete");
  } else {
    let isUsed = false;

    $.getJSON("/JSONFiles/Auth/users.json", (users) => {
      users.forEach((user) => {
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

      window.location.replace("/index.html");
    }
  }
}
