import { CharacterResponse } from "./model/api.model";

const baseCharactersUrl = "https://rickandmortyapi.com/api/character";

async function fetchCharacters(url: string): Promise<CharacterResponse> {
  const response = await fetch(url);
  const content: CharacterResponse = await response.json();

  return content;
}

export { fetchCharacters };
