import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { Character } from "../../../modules/characters/models/character.model";
import { CharacterApiPageResponse } from "../../../modules/characters/models/character-api-reponse.model";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  private _favoriteCharactersIds: BehaviorSubject<number[]>;
  private _characters: BehaviorSubject<Character[]>;
  private _searchText: BehaviorSubject<string>;
  private _searchTextFavorites: BehaviorSubject<string>; // Creamos el Observable

  constructor(private _http: HttpClient) {
    this._favoriteCharactersIds = new BehaviorSubject<number[]>([]);
    this._characters = new BehaviorSubject<Character[]>([]);

    this._searchText = new BehaviorSubject<string>("");
    this._searchTextFavorites = new BehaviorSubject<string>(""); // Lo instanciamos
  }

  get favoriteCharactersIds(): Observable<number[]> {
    return this._favoriteCharactersIds;
  }

  set searchText(value: string) {
    this._searchText.next(value);
  }

  get searchText(): Observable<string> {
    return this._searchText;
  }

  // Añadimos sus getters y setters
  set searchTextFavorites(value: string) {
    this._searchTextFavorites.next(value);
  }

  get searchTextFavorites(): Observable<string> {
    return this._searchTextFavorites;
  }

  get filteredCharacters(): Observable<Character[]> {
    return combineLatest([this._searchText, this._characters]).pipe(
      map((value: [string, Character[]]) => {
        const [searchText, characters] = value;

        return characters.filter((character) =>
          character.name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  get favoriteCharacters(): Observable<Character[]> {
    return combineLatest([this._favoriteCharactersIds, this._characters]).pipe(
      map((value: [number[], Character[]]) => {
        const [favoriteCharacterIds, characters] = value;

        return characters.filter((character) =>
          favoriteCharacterIds.includes(character.id)
        );
      })
    );
  }

  /**
   * Antes solo teníamos el searchText, que se usa para el filtrado general de personajes.
   * Añadimos también un filtro por nombre para los favoritos.
   *
   * Ahora hay que crear un Observable para los favoritos, vamos arriba.
   *
   * Creamos el método get que hará el filtrado de personajes favoritos.
   *
   * Este método hace lo siguiente:
   * 1. Escucha los cambios en tres fuentes:
   *    - Los IDs de personajes marcados como favoritos.
   *    - El listado completo de personajes cargados desde la API.
   *    - El texto de búsqueda introducido en la barra de favoritos.
   *
   * 2. Primero filtra los personajes que estén marcados como favoritos.
   * 3. Luego aplica un segundo filtro según el texto de búsqueda.
   *
   * El resultado es una lista reactiva y filtrada de personajes favoritos.
   */
  get filteredFavoriteCharacters(): Observable<Character[]> {
    return combineLatest([
      this._favoriteCharactersIds,
      this._characters,
      this._searchTextFavorites,
    ]).pipe(
      map(([favoriteIds, characters, searchText]) => {
        return characters
          .filter((character) => favoriteIds.includes(character.id))
          .filter((character) =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
          );
      })
    );
  }

  loadCharacters(): void {
    this._fetchCharacters().subscribe({
      next: (characters: Character[]) => {
        this._characters.next(characters);
      },
      error: (error) => {
        console.error("Error fetching characters:", error);
      },
    });
  }

  toggleFavorite(characterId: number): void {
    const currentFavorites = this._favoriteCharactersIds.getValue();

    const index = currentFavorites.findIndex(
      (id: number) => id === characterId
    );

    if (index === -1) {
      currentFavorites.push(characterId);
    } else {
      currentFavorites.splice(index, 1);
    }

    this._favoriteCharactersIds.next(currentFavorites);
  }

  private _fetchCharactersPage(): Observable<CharacterApiPageResponse> {
    return this._http.get<CharacterApiPageResponse>(
      "https://rickandmortyapi.com/api/character"
    );
  }

  private _fetchCharacters(): Observable<Character[]> {
    return this._fetchCharactersPage().pipe(
      map((response: CharacterApiPageResponse) => {
        return response.results;
      })
    );
  }
}
