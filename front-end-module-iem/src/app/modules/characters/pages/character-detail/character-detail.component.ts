import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {
  @Input() id: string;

  constructor() {
    this.id = '';
  }

  protected printId(): void {
    console.log(this.id);
  }
}
