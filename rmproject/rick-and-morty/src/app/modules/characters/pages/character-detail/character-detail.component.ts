import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {
  @Input() id: number;

  constructor() {
    this.id = 0;
  }

  protected printId() {
    console.log(this.id);
  }
}
