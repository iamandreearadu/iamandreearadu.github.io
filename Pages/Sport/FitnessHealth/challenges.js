/*
    TO DO LIST FOR ANDREEA RADU ⓜⓜⓜⓜ 

    1. Cum ii spune si numele alege sa faci ceva diferit fata de ce ai facut pana acum
        - Ceva care ti se pare greu 

    SCOP =>     Sa simulam un caz pe cat real putem
                Sa te obisnuiesti cu ideea de obiecte si proprietati
                

    Author: Boldisoru' - Software Engineer | Life Coach | Gym Coach | Healer etc... :))
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2022, 7, 25, 20, 00, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 20, 00, 00);
const year = futureDate.getUTCFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

let day = weekdays[futureDate.getDay()];

giveaway.textContent = `on ${day} ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `sorry,this giveaway has expired`;
  }
}

// countdown

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

/* tab function*/
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
/*date of last challenge*/

let title = document.querySelector(".title-challenge");

const lastdate = new Date(tempYear, tempMonth, tempDay - 7, 20, 00, 00);
const lastYear = lastdate.getUTCFullYear();

let lastMonth = lastdate.getMonth();
lastMonth = months[lastMonth];
const lastDateDay = lastdate.getDate();
let lastDay = weekdays[lastdate.getDay()];
title.textContent = ` ${lastDay} ${lastDateDay} ${lastMonth} ${lastYear}`;
