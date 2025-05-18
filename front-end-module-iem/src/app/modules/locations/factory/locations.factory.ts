// location.factory.ts
import { Location } from "../models/locations.model";

export function createLocation(payload: Partial<Location>): Location {
  return {
    id: Math.floor(Math.random() * 1000),
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
    ...payload,
  };
}
