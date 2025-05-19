import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { CommonModule } from "@angular/common";
import { CharacterService } from "../../../../core/services/entity/character.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs";
import { __param } from "tslib";

@Component({
  selector: "app-character-detail",
  imports: [CommonModule],
  templateUrl: "./character-detail.component.html",
  styleUrl: "./character-detail.component.css",
})
export class CharacterDetailComponent implements OnInit {
  public character: Character | null = null;

  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get("id");
          return id ? this._characterService.getById(+id) : [];
        })
      )
      .subscribe({
        next: (character) => {
          this.character = character;
        },
        error: (err) => {
          console.error("Error al cargar el personaje");
        },
      });
  }
}
