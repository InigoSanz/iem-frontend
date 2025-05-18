import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntityService } from "./entity.service";

@Injectable({
  providedIn: "root",
})
export class LocationService extends EntityService<any, any> {
  constructor(http: HttpClient) {
    super(http, "https://rickandmortyapi.com/api/location");
  }
}
