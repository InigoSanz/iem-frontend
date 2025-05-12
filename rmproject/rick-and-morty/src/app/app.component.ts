import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { FilterService } from './core/services/filter/filter.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty';

  constructor(private _filterService: FilterService) {}
  

  protected onSearchText(searchText: string) {
    this._filterService.searchText = searchText;
  }
}
