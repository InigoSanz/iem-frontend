import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _characters: Character[];
  private _favoriteCharactersIds: BehaviorSubject<number[]>;
  private _searchText: BehaviorSubject<string>;

  constructor(private _http: HttpClient) {
    this._searchText = new BehaviorSubject<string>('');
    this._favoriteCharactersIds = new BehaviorSubject<number[]>([]);

    this._characters = [
      { id: 1, name: 'Rick Sanchez', status: 'Alive' },
      { id: 2, name: 'Morty Smith', status: 'Alive' },
      { id: 3, name: 'Summer Smith', status: 'Alive' },
      { id: 4, name: 'Beth Smith', status: 'Alive' },
      { id: 5, name: 'Jerry Smith', status: 'Alive' },
      { id: 6, name: 'Mr. Meeseeks', status: 'Alive' },
      { id: 7, name: 'Birdperson', status: 'Alive' },
      { id: 8, name: 'Evil Morty', status: 'Alive' },
      { id: 9, name: 'Mr. Poopybutthole', status: 'Alive' },
      { id: 10, name: 'Squanchy', status: 'Alive' },
      { id: 11, name: 'Tammy Gueterman', status: 'Deceased' },
      { id: 12, name: 'Unity', status: 'Alive' },
      { id: 13, name: 'Noob-Noob', status: 'Alive' },
      { id: 14, name: 'Jessica', status: 'Alive' },
      { id: 15, name: 'Mr. Goldenfold', status: 'Alive' },
    ];
  }

  get characters(): Character[] {
    return this._characters;
  }

  get searchText(): Subject<string> {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText.next(value);
  }

  get favoriteCharactersIds(): Observable<number[]> {
    return this._favoriteCharactersIds;
  }

  get filteredCharacters(): Observable<Character[]> {
    return this._searchText.pipe(
      map((searchText: string) => {
        const filteredCharacters = this._characters.filter(
          (character: Character) => {
            return character.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }
        );

        return filteredCharacters;
      })
    );
  }

  fetchCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  toggleFavorite(characterId: number): void {
    const currentFavorites = this._favoriteCharactersIds.getValue();

    const index = currentFavorites.findIndex(
      (character: number) => character === characterId
    );

    if (index === -1) {
      currentFavorites.push(characterId);
    } else {
      currentFavorites.splice(index, 1);
    }

    this._favoriteCharactersIds.next(currentFavorites);
  }

  getCharacterById(id: number): Character | null {
    for (const character of this._characters) {
      if (character.id === id) {
        return character;
      }
    }
    return null;
  }
}
