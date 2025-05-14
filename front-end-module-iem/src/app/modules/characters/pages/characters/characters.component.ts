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
  protected filteredCharacters: Character[];
  protected favoriteCharacterIds: number[];
  protected favoriteCharacters: Character[];

  constructor(private _filterService: FilterService) {
    this.filteredCharacters = [];
    this.favoriteCharacterIds = [];
    this.favoriteCharacters = [];
  }

  ngOnInit(): void {
    this._filterService.loadCharacters();

    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    this._filterService.favoriteCharactersIds.subscribe({
      next: (favoriteIds: number[]) => {
        this.favoriteCharacterIds = favoriteIds;
      },
    });

    const characters: Character[] = [];

    this._filterService.favoriteCharactersIds.subscribe({
      next: (favouriteCharacterId: number[]) => {
        for (const character of characters) {
          if (favouriteCharacterId.includes(character.id)) {
            this.favoriteCharacters.push(character);
          }
        }
      },
    });

    this._filterService.favoriteCharacters.subscribe({
      next: (favoriteCharacters: Character[]) => {
        this.favoriteCharacters = favoriteCharacters;
      },
    });
  }

  protected onFavoriteClick(character: Character): void {
    this._filterService.toggleFavorite(character.id);
  }
}
