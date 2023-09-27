"use strict";

const sons = {
  A: `sounds/piano-mp3_A4.mp3`,
  S: `sounds/piano-mp3_B4.mp3`,
  D: `sounds/piano-mp3_C5.mp3`,
  F: `sounds/piano-mp3_D5.mp3`,
  G: `sounds/piano-mp3_E5.mp3`,
  H: `sounds/piano-mp3_F5.mp3`,
  J: `sounds/piano-mp3_G5.mp3`,
  K: `sounds/piano-mp3_A6.mp3`,
  L: `sounds/piano-mp3_B6.mp3`,
  B: `sounds/piano-mp3_C6.mp3`,
  N: `sounds/piano-mp3_D6.mp3`,
  M: `sounds/piano-mp3_E6.mp3`,
}

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra = evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);

document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);