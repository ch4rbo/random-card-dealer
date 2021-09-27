/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /*console.log(""); */

  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function getRandom(number) {
    return Math.floor(Math.random() * number);
  }

  let numeroAleatorio = Math.floor(Math.random() * 13);
  let valorAleatorio = numeros[numeroAleatorio];
  let numeroAleatorioPalo = Math.floor(Math.random() * 4);
  console.log(valorAleatorio, paloAleatorio, numeroAleatorioPalo);
  let paloAleatorio = palos[numeroAleatorioPalo];
  console.log(valorAleatorio, paloAleatorio);

  let palo1 = document.querySelector(".top");
  let palo2 = document.querySelector(".bottom");
  let randomnum = document.querySelector(".center");

  if (palos[""] === "♥") {
    palo1.setAtrribute("heart");
    heart.innerHTML = paloAleatorio;
    numero.innerHTML = valorAleatorio;
  } else {
    palo1.innerHTML = paloAleatorio;
    randomnum.innerHTML = valorAleatorio;
    palo2.innerHTML = paloAleatorio;
  }
  let color;

  if (paloAleatorio == "♦" || paloAleatorio == "♥") {
    color = "red";
    palo1.style.color = "red";
    palo2.style.color = "red";
    randomnum.style.color = "red";
  }
  
};
