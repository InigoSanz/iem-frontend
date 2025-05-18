import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { createCharacter } from "../../factory/character.factory";
import { Character } from "../../models/character.model";
import { CharacterService } from "../../../../core/services/entity/character.service";

interface CharacterForm {
  name: FormControl<string | null>;
  status: FormControl<string | null>;
  species: FormControl<string | null>;
  gender: FormControl<string | null>;
  origin: FormControl<string | null>;
  location: FormControl<string | null>;
  image: FormControl<string | null>;
  episode: FormControl<string | null>;
  created: FormControl<string | null>;
}

@Component({
  selector: "app-character-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./character-form.component.html",
  styleUrl: "./character-form.component.css",
})
export class CharacterFormComponent {
  protected form: FormGroup<CharacterForm>;

  constructor(
    private _formBuilder: FormBuilder,
    private _characterService: CharacterService,
  ) {
    this.form = this._formBuilder.group<CharacterForm>({
      name: new FormControl("", {
        validators: [Validators.required],
      }),
      status: new FormControl("", {
        validators: [Validators.required],
      }),
      species: new FormControl("", {
        validators: [Validators.required],
      }),
      gender: new FormControl("", {
        validators: [Validators.required],
      }),
      origin: new FormControl("", {
        validators: [Validators.required],
      }),
      location: new FormControl("", {
        validators: [Validators.required],
      }),
      image: new FormControl("", {
        validators: [Validators.required],
      }),
      episode: new FormControl("", {
        validators: [Validators.required],
      }),
      created: new FormControl(""),
    });
  }

  protected onSubmit(): void {
    const now = new Date();
    if (this.form.valid) {
      this.form.patchValue({
        created: now.toISOString(),
      });

      let payload = this.form.value as any;
      payload.origin = { name: payload.origin, url: "" };

      payload.location = { name: payload.location, url: "" };
      payload.episode = [payload.episode];

      const character = createCharacter(payload as Partial<Character>);
      this._characterService.addEntity(character);
    } else {
      // Handle form submission error
      console.error("Form is invalid, submit should not be allowed.");
    }
  }
}
