import { Component, Input, OnInit } from '@angular/core';
import {
  Character,
  FilterService,
} from '../../../../core/services/filter/filter.service';
import { CardComponent } from '../../../../shared/card/card.component';

@Component({
  selector: 'app-character-detail',
  imports: [CardComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent implements OnInit {
  @Input() id: string;

  protected character: Character | null;

  constructor(private _filterService: FilterService) {
    this.id = '';
    this.character = null;
  }
  ngOnInit(): void {
    const parsedId = parseInt(this.id);

    if (typeof parsedId === 'number') {
      this._filterService.getCharacterById(parsedId);
    } else {
    }
  }

  protected printId(): void {
    console.log(this.id);
  }
}
