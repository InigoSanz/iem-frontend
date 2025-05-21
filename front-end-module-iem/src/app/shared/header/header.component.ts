import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { AuthService } from "../../core/services/auth/auth.service";
import { SnackBarService } from "../../core/services/snackbar/snackbar.service";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  protected isLoggedIn = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackBarService: SnackBarService
  ) {
    this._authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(["/login"]);
    this._snackBarService.showSnackBar("Sesión cerrada correctamente");
  }
}
