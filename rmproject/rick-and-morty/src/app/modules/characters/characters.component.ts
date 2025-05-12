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

  constructor(private _filterService: FilterService) {
    // Initialize filtered characters with all characters
    this.filteredCharacters = [];

    this._filterService.filteredCharacters.subscribe({
      next: (characters: Character[]) => {
        this.filteredCharacters = characters;
      },
    });
  }
}
