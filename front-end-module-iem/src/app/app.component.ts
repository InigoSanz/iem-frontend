import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";
import { SearchBarComponent } from "./shared/search-bar/search-bar.component";
import { FilterService } from "./core/services/filter/filter.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "rick-and-morty";

  constructor(private _filterService: FilterService) {}

  protected onSearchText(searchText: string) {
    this._filterService.searchText = searchText;
  }
}
