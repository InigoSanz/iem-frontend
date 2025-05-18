import { Character } from "../models/character.model";

export function createCharacter(payload: Partial<Character>): Character {
  return {
    id: Math.floor(Math.random() * 1000),
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: { name: "", url: "" },
    location: { name: "", url: "" },
    image: "",
    episode: [],
    url: "",
    created: "",
    ...payload,
  };
}
