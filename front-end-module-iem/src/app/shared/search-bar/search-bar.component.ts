import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() searchText: EventEmitter<string>;

  protected searchValue: string;

  constructor() {
    this.searchValue = '';
    this.searchText = new EventEmitter<string>();
  }

  protected onSearch() {
    this.searchText.emit(this.searchValue);
  }
}
