import { Component, OnInit } from "@angular/core";
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from "@angular/common";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

@Component({
  selector: "app-episodes",
  imports: [CommonModule, CardComponent],
  templateUrl: "./episodes.component.html",
  styleUrl: "./episodes.component.css",
})
export class EpisodesComponent implements OnInit {
  protected episodes: Episode[] = [
    {
      id: 1,
      name: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
    },
    {
      id: 2,
      name: "Lawnmower Dog",
      air_date: "December 9, 2013",
      episode: "S01E02",
    },
    {
      id: 3,
      name: "Anatomy Park",
      air_date: "December 16, 2013",
      episode: "S01E03",
    },
    {
      id: 4,
      name: "M. Night Shaym-Aliens!",
      air_date: "January 13, 2014",
      episode: "S01E04",
    },
    {
      id: 5,
      name: "Meeseeks and Destroy",
      air_date: "January 20, 2014",
      episode: "S01E05",
    },
    {
      id: 6,
      name: "Rick Potion No. 9",
      air_date: "January 27, 2014",
      episode: "S01E06",
    },
    {
      id: 7,
      name: "Raising Gazorpazorp",
      air_date: "February 10, 2014",
      episode: "S01E07",
    },
    {
      id: 8,
      name: "Rixty Minutes",
      air_date: "February 17, 2014",
      episode: "S01E08",
    },
    {
      id: 9,
      name: "Something Ricked This Way Comes",
      air_date: "March 10, 2014",
      episode: "S01E09",
    },
    {
      id: 10,
      name: "Close Rick-Counters of the Rick Kind",
      air_date: "April 7, 2014",
      episode: "S01E10",
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
