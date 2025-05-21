import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";
import { SearchBarComponent } from "./shared/search-bar/search-bar.component";
import { CharacterService } from "./core/services/entity/character.service";
import { SnackBarService } from "./core/services/snackbar/snackbar.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "rick-and-morty";
  protected messageFinal: string = "";
  protected show: boolean = false;

  constructor(
    private _characterService: CharacterService,
    private _snackBarService: SnackBarService
  ) {
    // Aqui hay que renderizar los snakbars, desde un servicio, aqui y mostrarlo en el html

    this._snackBarService.snackMessage$.subscribe((message: string) => {
      this.messageFinal = message;
      this.show = !!message;
    });
  }

  protected onSearchText(searchText: string) {
    this._characterService.searchText = searchText;
  }
}
