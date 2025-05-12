import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-header',
  imports: [RouterModule, SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private _router: Router) {}

  protected navigateTo(path: string) {
    this._router.navigate([path]);
  }


}
