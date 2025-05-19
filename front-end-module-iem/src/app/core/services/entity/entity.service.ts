import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";

interface Entity {
  name: string;
  id: number;
}

interface ApiResponse<T> {
  results: T[];
}

export class EntityService<
  // Type refering the entity.
  T extends Entity,
  // Type refering the entity's api response.
  U extends ApiResponse<T>
> {
  private _apiUrl: string;
  private _favoriteEntityIds: BehaviorSubject<number[]>;
  private _entities: BehaviorSubject<T[]>;
  private _searchText: BehaviorSubject<string>;

  constructor(private _http: HttpClient, apiUrl: string) {
    this._apiUrl = apiUrl;
    this._favoriteEntityIds = new BehaviorSubject<number[]>([]);
    this._entities = new BehaviorSubject<T[]>([]);

    this._searchText = new BehaviorSubject<string>("");
  }

  get entities(): Observable<T[]> {
    return this._entities;
  }

  get favoriteEntityIds(): Observable<number[]> {
    return this._favoriteEntityIds;
  }

  set searchText(value: string) {
    this._searchText.next(value);
  }

  get searchText(): Observable<string> {
    return this._searchText;
  }

  get filteredEntities(): Observable<T[]> {
    return combineLatest([this._searchText, this._entities]).pipe(
      map((value: [string, T[]]) => {
        const [searchText, entities] = value;

        return entities.filter((entity) =>
          entity.name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  getById(id: number): Observable<T> {
    return this._http.get<T>(`${this._apiUrl}/${id}`);
  }

  get favoriteEntities(): Observable<T[]> {
    return combineLatest([this._favoriteEntityIds, this._entities]).pipe(
      map((value: [number[], T[]]) => {
        const [favoriteEntityIds, entities] = value;

        return entities.filter((entity) =>
          favoriteEntityIds.includes(entity.id)
        );
      })
    );
  }

  addEntity(entity: T): void {
    const currentEntities = this._entities.getValue();
    currentEntities.push(entity);

    this._entities.next(currentEntities);
  }

  loadEntities(): void {
    this._fetchEntities().subscribe({
      next: (entities: T[]) => {
        this._entities.next(entities);
      },
      error: (error) => {
        console.error("Error fetching entities:", error);
      },
    });
  }

  toggleFavorite(entityId: number): void {
    const currentFavorites = this._favoriteEntityIds.getValue();

    const index = currentFavorites.findIndex((id: number) => id === entityId);

    if (index === -1) {
      currentFavorites.push(entityId);
    } else {
      currentFavorites.splice(index, 1);
    }

    this._favoriteEntityIds.next(currentFavorites);
  }

  private _fetchEntitiesPage(): Observable<U> {
    return this._http.get<U>(this._apiUrl);
  }

  private _fetchEntities(): Observable<T[]> {
    return this._fetchEntitiesPage().pipe(
      map((response: U) => {
        return response.results;
      })
    );
  }
}
