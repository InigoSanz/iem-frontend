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
    this.headerTitle = 'Default Header Title';
    this.footerText = 'Default Footer Text';
    this.isFavorite = false;

    this.favoriteClick = new EventEmitter<void>();
  }

  onFavoriteClick(): void {
    this.favoriteClick.emit();
  }
}
