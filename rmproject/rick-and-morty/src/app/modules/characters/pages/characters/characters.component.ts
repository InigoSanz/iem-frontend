import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
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
export class CharactersComponent /*implements OnInit */ {
  protected filteredCharacters: Character[] = [];
  protected favoriteCharacterIds: number[] = [];
  protected favoriteCharacters: Character[] = [];

  //ngOnInit(): void {}
  /*this._filterService.fetchCharacters().subscribe({
    next: (characters: Character[]) => {
      console.log("Character");
    })
  });*/

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
