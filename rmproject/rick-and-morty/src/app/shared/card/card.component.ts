import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  @Input() headerTitle: string;
  @Input() footerText: string;

  constructor() {
    this.headerTitle = '';
    this.footerText = '';
  }

}
