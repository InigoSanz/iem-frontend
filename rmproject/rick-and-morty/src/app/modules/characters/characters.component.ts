import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import {
  Character,
  FilterService,
} from '../../core/services/filter/filter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  imports: [CardComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  protected filteredCharacters: Character[] = [];
  protected favoriteCharacterIds: number[];

  constructor(private _filterService: FilterService) {
    // Initialize filtered characters with all characters
    this.filteredCharacters = [];
    this.favoriteCharacterIds = [];

    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });

    this._filterService.favoriteCharacters.subscribe({
      next: (favoriteIds: number[]) => {
        this.favoriteCharacterIds = favoriteIds;
      },
    });
  }
  protected onFavoriteClick(character: Character): void {
    this._filterService.toggleFavorite(character.id);
  }
}
