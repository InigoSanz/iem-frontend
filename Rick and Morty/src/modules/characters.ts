import { fetchCharacters } from "../api/api";
import { Character, CharacterResponse } from "../api/model/api.model";

type Direction = "next" | "prev";

const charactersUrl =
  "https://rickandmortyapi.com/api/character?page=1&pageSize=20";
let charactersResponseCache: CharacterResponse | null = null;

async function displayCharacters(container: HTMLElement, direction: Direction) {
  container.innerHTML = "";

  let url: string | null = null;

  if (charactersResponseCache === null) {
    url = charactersUrl;
  } else {
    if (direction === "next" && charactersResponseCache.info.next !== null) {
      url = charactersResponseCache.info.next;
    } else if (
      direction === "prev" &&
      charactersResponseCache.info.prev !== null
    ) {
      url = charactersResponseCache.info.prev;
    }
  }

  if (url === null) {
    return;
  }

  const charactersResponse: CharacterResponse = await fetchCharacters(url);

  for (let i = 0; i < charactersResponse.results.length; i++) {
    const characterNow: Character = charactersResponse.results[i];

    const characterElement = document.createElement("div");
    characterElement.classList.add("character-card-container");
    characterElement.innerHTML = `
            <h2>${characterNow.name}</h2>
            <p>Species: ${characterNow.species}</p>
            <p>Status: ${characterNow.status}</p>
        `;
    container.appendChild(characterElement);
  }

  charactersResponseCache = charactersResponse;
}
export { displayCharacters };
