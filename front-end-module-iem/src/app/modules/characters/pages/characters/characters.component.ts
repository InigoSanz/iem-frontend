import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../../../shared/card/card.component";
import { FilterService } from "../../../../core/services/filter/filter.service";
import { Character } from "../../models/character.model";
import { SearchBarComponent } from "../../../../shared/search-bar/search-bar.component";

@Component({
  selector: "app-characters",
  imports: [CommonModule, CardComponent, SearchBarComponent],
  templateUrl: "./characters.component.html",
  styleUrl: "./characters.component.css",
})
export class CharactersComponent implements OnInit {
  protected filteredCharacters: Character[] = [];
  protected favoriteCharacters: Character[] = [];
  protected favoriteCharacterIds: number[] = [];

  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    this._filterService.loadCharacters();

    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    this._filterService.filteredFavoriteCharacters.subscribe({
      next: (characters: Character[]) => {
        this.favoriteCharacters = characters;
      },
    });

    this._filterService.favoriteCharactersIds.subscribe({
      next: (ids: number[]) => {
        this.favoriteCharacterIds = ids;
      },
    });
  }

  protected onFavoriteClick(character: Character): void {
    this._filterService.toggleFavorite(character.id);
  }

  /**
   * Se ejecuta cuando hacemos la búsqueda desde <app-search-bar>.
   *
   * Actualiza el BehaviorSubject searchTextFavorites del FilterService.
   *
   * Este BehaviorSubject es observado por el método filteredFavoriteCharacters para aplicar el filtro.
   *
   * @param searchText
   */
  protected onFavoriteSearch(searchText: string): void {
    this._filterService.searchTextFavorites = searchText;
  }
}
