import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { createLocation } from "../../factory/locations.factory";
import { Location } from "../../models/locations.model";
import { LocationService } from "../../../../core/services/entity/locations.service";

interface LocationsForm {
  name: FormControl<string | null>;
  type: FormControl<string | null>;
  dimension: FormControl<string | null>;
  residents: FormControl<string | null>;
  url: FormControl<string | null>;
  created: FormControl<string | null>;
}

@Component({
  selector: "app-locations-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./locations-form.component.html",
  styleUrl: "./locations-form.component.css",
})
export class LocationsFormComponent {
  protected form: FormGroup<LocationsForm>;

  constructor(
    private _formBuilder: FormBuilder,
    private _locationsService: LocationService
  ) {
    this.form = this._formBuilder.group<LocationsForm>({
      name: new FormControl("", {
        validators: [Validators.required],
      }),
      type: new FormControl("", {
        validators: [Validators.required],
      }),
      dimension: new FormControl("", {
        validators: [Validators.required],
      }),
      residents: new FormControl("", {
        validators: [Validators.required],
      }),
      url: new FormControl(""),
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
      payload.residents = [payload.residents];

      const location = createLocation(payload as Partial<Location>);
      this._locationsService.addEntity(location);
    } else {
      console.error("Form is invalid, submit should not be allowed.");
    }
  }
}
