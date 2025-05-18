import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";

@Injectable({
  providedIn: "root",
})
export class EpisodeService extends EntityService<any, any> {
  constructor(http: HttpClient) {
    super(http, "https://rickandmortyapi.com/api/episode");
  }
}
