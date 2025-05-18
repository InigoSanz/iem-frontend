import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { createEpisode } from "../../factory/episodes.factory";
import { Episode } from "../../models/episodes.model";
import { EpisodeService } from "../../../../core/services/entity/episode.service";

interface EpisodesForm {
  name: FormControl<string | null>;
  air_date: FormControl<string | null>;
  episode: FormControl<string | null>;
  characters: FormControl<string | null>;
  url: FormControl<string | null>;
  created: FormControl<string | null>;
}

@Component({
  selector: "app-episode-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./episode-form.component.html",
  styleUrl: "./episode-form.component.css",
})
export class EpisodeFormComponent {
  protected form: FormGroup<EpisodesForm>;

  constructor(
    private _formBuilder: FormBuilder,
    private _episodesService: EpisodeService
  ) {
    this.form = this._formBuilder.group<EpisodesForm>({
      name: new FormControl("", {
        validators: [Validators.required],
      }),
      air_date: new FormControl("", {
        validators: [Validators.required],
      }),
      episode: new FormControl("", {
        validators: [Validators.required],
      }),
      characters: new FormControl("", {
        validators: [Validators.required],
      }),
      url: new FormControl("", {
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
      payload.characters = [payload.characters];

      const episode = createEpisode(payload as Partial<Episode>);
      this._episodesService.addEntity(episode);
    } else {
      // Handle form submission error
      console.error("Form is invalid, submit should not be allowed.");
    }
  }
}
