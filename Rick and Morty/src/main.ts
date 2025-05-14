import "./style.css";
import HeaderTemplate from "./templates/header.html?raw";
import Footer from "./templates/footer.html?raw";
import Main from "./templates/main.html?raw";
import { displayCharacters } from "./modules/characters";

// Iñigo
const root = document.querySelector<HTMLDivElement>("#app")!;

const header = document.createElement("div");
header.innerHTML = HeaderTemplate;

const footer = document.createElement("div");
footer.innerHTML = Footer;

const main = document.createElement("div");
main.innerHTML = Main;

root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);

const searchContentSection = document.createElement("section");
searchContentSection.classList.add("search-content-section");

const searchContentForm = document.createElement("form");
searchContentForm.classList.add("search-content-form");

const searchLabel = document.createElement("label");
searchLabel.classList.add("search-label");
searchLabel.htmlFor = "search-input";
searchLabel.innerText = "Busca tu personaje";

const searchInput = document.createElement("input");
searchInput.classList.add("search-input");
searchInput.type = "text";
searchInput.placeholder = "Nombre del personaje...";

const searchButton = document.createElement("button");
searchButton.classList.add("search-button");
searchButton.type = "submit";
searchButton.innerText = "Buscar";

const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

searchContainer.appendChild(searchLabel);
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);

searchContentForm.appendChild(searchContainer);

searchContentSection.appendChild(searchContentForm);

main.appendChild(searchContentSection);

const charactersContent = document.createElement("div");

charactersContent.classList.add("character-content");

main.appendChild(charactersContent);

// Como no sabia como centrar los botones en medio, los envuelvo en un div y aplico el flex
const buttonContent = document.createElement("div");
buttonContent.classList.add("button-container");

const prevButton = document.createElement("button");
prevButton.classList.add("button-prev-next");
prevButton.innerText = "Load Previous Page";

prevButton.addEventListener("click", async () => {
  console.log("Loading previous page...");
  await displayCharacters(charactersContent, "prev");
});

buttonContent.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.classList.add("button-prev-next");
nextButton.innerText = "Load Next Page";

nextButton.addEventListener("click", async () => {
  console.log("Loading next page...");
  await displayCharacters(charactersContent, "next");
});

buttonContent.appendChild(nextButton);
main.appendChild(buttonContent);
