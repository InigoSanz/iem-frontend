import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { AuthService } from "../../core/services/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private _authService: AuthService, private _router: Router) {
    this.isLoggedIn$ = this._authService.isLoggedIn$;
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
