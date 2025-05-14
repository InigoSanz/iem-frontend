export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: RelatedEntityInfo;
  location: RelatedEntityInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface RelatedEntityInfo {
  name: string;
  url: string;
}
