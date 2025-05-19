import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { CommonModule } from "@angular/common";
import { CharacterService } from "../../../../core/services/entity/character.service";
import { ActivatedRoute } from "@angular/router";
import { __param } from "tslib";

@Component({
  selector: "app-character-detail",
  imports: [CommonModule],
  templateUrl: "./character-detail.component.html",
  styleUrl: "./character-detail.component.css",
})
export class CharacterDetailComponent implements OnInit {
  public character: Character | null = null;
  private numberId: number = 0;
  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      // Se suscribe a la ruta con el parametro el cual es un ID, este emite los parametros de la url
      const id = params.get("id");
      if (id) {
        // verifica que el id no es nulo
        this.numberId = parseInt(id);
        this._characterService.getById(this.numberId).subscribe({
          // +id lo que hace es convertir de string a numero, luego nos suscribimos
          next: (character) => {
            // es la respuesta recibida con los datos
            this.character = character; // guardamos en nuestra variable el personaje recibido
          },
          error: (err) => {
            console.error("Error al cargar el personaje:", err);
          },
        });
      }
    });
  }
}
