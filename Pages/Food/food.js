"use strict";

let dataset = [
  {
    title: "Delights Nest",
    id: 1,
  },
];

function loadData() {
  let template = document.getElementById("template");
  dataset.forEach(function (item) {
    // create a new element with the contents of the template
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = template.innerHTML.replace("{{title}}", item.title);
    document.getElementById("items").appendChild(div);
  });
}
