import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() searchText: EventEmitter<string>;

  protected searchValue: string;

  constructor() {
    this.searchText = new EventEmitter<string>();
    this.searchValue = '';
  }

  protected onSearch(){
    this.searchText.emit(this.searchValue);
  }

}
