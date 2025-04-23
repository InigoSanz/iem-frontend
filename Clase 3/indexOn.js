//console.log("Hola mundo");

const title = document.querySelector("h1");
console.log(title);

title.innerText = "New Title";
title.innerHTML = "<p>New paragraph</p>";
//title.style.color = "red";

title.classList.add("title");

const newElement = document.createElement("div");
newElement.innerText = "Div creado por JS";

const body = document.querySelector("body");
body.appendChild(newElement);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log("Has hecho click");
});

// Hay diversos eventos, por ejemplo "mouseover"

// Si metemos todo el anterior codigo dentro, conseguimos que el codigo se ejecute solo cuando todo el HTML se haya cargado
// document.addEventListener("DOMContentLoaded", () => {});
