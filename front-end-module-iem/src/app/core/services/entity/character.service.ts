import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";
import { HttpClient } from "@angular/common/http";
import { CharacterApiPageResponse } from "../../../modules/characters/models/character-api-reponse.model";
import { Character } from "../../../modules/characters/models/character.model";

@Injectable({
  providedIn: "root",
})
export class CharacterService extends EntityService<
  Character,
  CharacterApiPageResponse
> {
  constructor(http: HttpClient) {
    super(http, "https://rickandmortyapi.com/api/character");
  }
}
