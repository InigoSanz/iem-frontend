import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {
  private _snackMessage$: BehaviorSubject<string>;

  constructor() {
    this._snackMessage$ = new BehaviorSubject<string>("");
  }

  get snackMessage$(): Observable<string> {
    return this._snackMessage$.asObservable();
  }

  showSnackBar(message: string) {
    this._snackMessage$.next(message);
    setTimeout(() => {
      this._snackMessage$.next("");
    }, 3000);
  }
}
