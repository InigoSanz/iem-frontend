import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input() headerTitle: string;
  @Input() footerText: string;
  @Input() isFavorite: boolean;
  @Input() imageUrl: string;

  @Output() favoriteClick: EventEmitter<void>;
  @Output() cardClick: EventEmitter<void>;

  constructor() {
    this.headerTitle = "Default Header Title";
    this.footerText = "Default Footer Text";
    this.isFavorite = false;
    this.imageUrl = "";
    this.favoriteClick = new EventEmitter<void>();
    this.cardClick = new EventEmitter<void>();
  }

  onFavoriteClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.favoriteClick.emit();
  }

  onCardClick(): void {
    this.cardClick.emit();
  }
}
