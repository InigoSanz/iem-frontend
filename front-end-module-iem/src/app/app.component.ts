import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";
import { SearchBarComponent } from "./shared/search-bar/search-bar.component";
import { CharacterService } from "./core/services/entity/character.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "rick-and-morty";

  constructor(private _characterService: CharacterService) { }

  protected onSearchText(searchText: string) {
    this._characterService.searchText = searchText;
  }
}
