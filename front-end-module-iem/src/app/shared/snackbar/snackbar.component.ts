import { Component } from "@angular/core";
import { SnackBarService } from "../../core/services/snackbar/snackbar.service";

@Component({
  selector: "app-snackbar",
  imports: [],
  templateUrl: "./snackbar.component.html",
  styleUrl: "./snackbar.component.css",
})
export class SnackbarComponent {
  constructor(public _snackBarService: SnackBarService) {}
}
