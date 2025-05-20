import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/services/auth/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  form: FormGroup;
  error = "";
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.form = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = "";

    const { username, password } = this.form.value;

    this._authService.login(username, password).subscribe({
      next: (success) => {
        this.loading = false;
        if (success) {
          this._router.navigate(["/"]);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = typeof err === "string" ? err : "Login failed"; // Ternario
      },
    });
  }
}
