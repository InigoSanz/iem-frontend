import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', redirectTo: 'characters', pathMatch: 'full'},

    {path: 'characters', loadComponent: 
        () => import('./modules/characters/characters.component')
        .then(m => m.CharactersComponent)},

    {path: 'episodes', loadComponent: 
        () => import('./modules/episodes/episodes.component')
        .then(m => m.EpisodesComponent)},
    
    {path: 'locations', loadComponent: 
        () => import('./modules/locations/locations.component')
        .then(m => m.LocationsComponent)},

        


];
