interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface Character {
  id: string;
  name: string;
  status: "Alive" | "Dead";
  species: "Human" | "Alien";
}

export type { CharacterResponse, Character };
