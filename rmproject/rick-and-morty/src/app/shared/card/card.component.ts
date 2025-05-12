import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() headerTitle: string;
  @Input() footerText: string;
  @Input() isFavorite: boolean;

  @Output() favoriteClick: EventEmitter<void>;

  constructor() {
    this.headerTitle = '';
    this.footerText = '';
    this.isFavorite = false;
    this.favoriteClick = new EventEmitter();
  }

  onFavoriteClick(): void {
    this.favoriteClick.emit();
  }
}
