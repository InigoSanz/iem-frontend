import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./modules/characters/characters-layout.component').then(
        (m) => m.CharactersLayoutComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './modules/characters/pages/characters/characters.component'
          ).then((m) => m.CharactersComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './modules/characters/pages/character-detail/character-detail.component'
          ).then((m) => m.CharacterDetailComponent),
      },
    ],
  },
  {
    path: 'episodes',
    loadComponent: () =>
      import('./modules/episodes/episodes.component').then(
        (m) => m.EpisodesComponent,
      ),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./modules/locations/locations.component').then(
        (m) => m.LocationsComponent,
      ),
  },
];
