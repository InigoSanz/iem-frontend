import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/card/card.component';
import {
  Character,
  FilterService,
} from '../../../../core/services/filter/filter.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  protected filteredCharacters: Character[] = [];
  protected favoriteCharacterIds: number[] = [];
  protected favoriteCharacters: Character[] = [];

  constructor(private _filterService: FilterService) {
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
  }

  protected onFavoriteClick(character: Character): void {
    this._filterService.toggleFavorite(character.id);
  }
}
