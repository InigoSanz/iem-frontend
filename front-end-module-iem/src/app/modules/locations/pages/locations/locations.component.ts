import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "../../shared/card/card.component";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

@Component({
  selector: "app-locations",
  imports: [CommonModule, CardComponent],
  templateUrl: "./locations.component.html",
  styleUrl: "./locations.component.css",
})
export class LocationsComponent {
  protected locations: Location[] = [
    {
      id: 1,
      name: "Earth (C-137)",
      type: "Planet",
      dimension: "Dimension C-137",
    },
    {
      id: 2,
      name: "Abadango",
      type: "Cluster",
      dimension: "unknown",
    },
    {
      id: 3,
      name: "Citadel of Ricks",
      type: "Space station",
      dimension: "unknown",
    },
    {
      id: 4,
      name: "Mortyland",
      type: "Amusement Park",
      dimension: "unknown",
    },
    {
      id: 5,
      name: "Post-Apocalyptic Earth",
      type: "Planet",
      dimension: "Post-Apocalyptic Dimension",
    },
  ];

  constructor() { }
}
