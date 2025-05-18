import { Episode } from "../models/episodes.model";

export function createEpisode(payload: Partial<Episode>): Episode {
  return {
    id: Math.floor(Math.random() * 1000),
    name: "",
    air_date: "",
    episode: "",
    characters: [],
    url: "",
    created: "",
    ...payload,
  };
}
