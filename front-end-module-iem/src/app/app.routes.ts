import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";
import { noAuthGuard } from "./core/guards/no-auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "characters",
    pathMatch: "full",
  },
  {
    path: "characters",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./modules/characters/characters-layout.component").then(
        (m) => m.CharactersLayoutComponent
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import(
            "./modules/characters/pages/characters/characters.component"
          ).then((m) => m.CharactersComponent),
      },
      {
        path: "new",
        loadComponent: () =>
          import(
            "./modules/characters/pages/character-form/character-form.component"
          ).then((m) => m.CharacterFormComponent),
      },
      {
        path: ":id",
        loadComponent: () =>
          import(
            "./modules/characters/pages/character-detail/character-detail.component"
          ).then((m) => m.CharacterDetailComponent),
      },
    ],
  },
  {
    path: "episodes",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./modules/episodes/episodes-layout.component").then(
        (m) => m.EpisodesLayoutComponent
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./modules/episodes/pages/episodes/episodes.component").then(
            (m) => m.EpisodesComponent
          ),
      },
      {
        path: "new",
        loadComponent: () =>
          import(
            "./modules/episodes/pages/episode-form/episode-form.component"
          ).then((m) => m.EpisodeFormComponent),
      },
    ],
  },
  {
    path: "locations",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./modules/locations/locations-layout.component").then(
        (m) => m.LocationsLayoutComponent
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import(
            "./modules/locations/pages/locations/locations.component"
          ).then((m) => m.LocationsComponent),
      },
      {
        path: "new",
        loadComponent: () =>
          import(
            "./modules/locations/pages/locations-form/locations-form.component"
          ).then((m) => m.LocationsFormComponent),
      },
    ],
  },
  {
    path: "login",
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import("./modules/login/login.component").then((m) => m.LoginComponent),
  },
];
