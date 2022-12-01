/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
  console.log("Hello Rigo from the console!");
};

function generateCard() {
  let figures = ["♦", "♥", "♠", "♣"];
  let numfig = Math.floor(Math.random() * 4);
  let figure = figures[numfig];
  let color = numfig <= 1 ? "red" : "black";
  let num = Math.floor(Math.random() * 12) + 1;
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "J";
      break;
    case 12:
      num = "Q";
      break;
    case 13:
      num = "K";
      break;
  }
  console.log(`figura ${figure} color: ${color} valor: ${num}`);
  document.getElementById(
    "card"
  ).innerHTML = `<div id="arriba">${figure}</div> <div id="num">${num}</div><div id="abajo">${figure}</div>`;
  document.getElementById("card").style.color = color;
}
