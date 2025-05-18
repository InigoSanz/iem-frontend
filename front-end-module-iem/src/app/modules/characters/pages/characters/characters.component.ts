import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../../../shared/card/card.component";
import { Character } from "../../models/character.model";
import { SearchBarComponent } from "../../../../shared/search-bar/search-bar.component";
import { CharacterService } from "../../../../core/services/entity/character.service";

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

  constructor(private _characterService: CharacterService) {
    this.filteredCharacters = [];
    this.favoriteCharacterIds = [];
    this.favoriteCharacters = [];
  }

  ngOnInit(): void {
    this._characterService.entities.subscribe({
      next: (characters: Character[]) => {
        if (characters.length === 0) {
          this._characterService.loadEntities();
        }
      },
    });

    this._characterService.filteredEntities.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    this._characterService.favoriteEntityIds.subscribe({
      next: (favoriteIds: number[]) => {
        this.favoriteCharacterIds = favoriteIds;
      },
    });

    const characters: Character[] = [];

    this._characterService.favoriteEntityIds.subscribe({
      next: (favouriteCharacterId: number[]) => {
        for (const character of characters) {
          if (favouriteCharacterId.includes(character.id)) {
            this.favoriteCharacters.push(character);
          }
        }
      },
    });

    this._characterService.favoriteEntities.subscribe({
      next: (favoriteCharacters: Character[]) => {
        this.favoriteCharacters = favoriteCharacters;
      },
    });
  }

  protected onFavoriteClick(character: Character): void {
    this._characterService.toggleFavorite(character.id);
  }
}
