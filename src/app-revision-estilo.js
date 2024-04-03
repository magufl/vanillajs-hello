/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = resultado();
  });
  //write your code here

  let resultado = () => {
    let quien = [
      "Mi vecino",
      "Tu padre",
      "El presidente",
      "Un elefante",
      "El portero",
      "Roberta"
    ];
    let que = ["quemó", "vendió", "estrelló", "se comió", "pintó", "voló"];
    let evitar = [
      "las ventanas",
      "los trabajos",
      "el proyecto",
      "mi código",
      "todo mi sueldo",
      "mi alma"
    ];
    let cuando = [
      "el 3 de enero",
      "mientras dormía",
      "durante la cena",
      "cuando estaba en el ascensor",
      "ayer",
      "hace 10 años"
    ];

    let aleatorioQuien = Math.floor(Math.random() * quien.length);
    let aleatorioQue = Math.floor(Math.random() * que.length);
    let aleatorioEvitar = Math.floor(Math.random() * evitar.length);
    let aleatorioCuando = Math.floor(Math.random() * cuando.length);

    return (
      quien[aleatorioQuien] +
      " " +
      que[aleatorioQue] +
      " " +
      evitar[aleatorioEvitar] +
      " " +
      cuando[aleatorioCuando]
    );
  };
};

//este es el bueno
