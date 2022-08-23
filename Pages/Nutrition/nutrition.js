"use strict";

const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2"
);
request.setRequestHeader("TRN-Api-Key", " 77b493fae6b74b848b59fbb25f030b3b");
request.send();
console.log(request.responseText);

request.addEventListener("load", function () {
  console.log(this.responseText);
});
