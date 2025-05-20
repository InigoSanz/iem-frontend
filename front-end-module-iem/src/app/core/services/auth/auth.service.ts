import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn$: BehaviorSubject<boolean>;

  constructor() {
    this._isLoggedIn$ = new BehaviorSubject<boolean>(false);
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn$.getValue();
  }

  login(username: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        result.next(true);
        this._isLoggedIn$.next(true);
      } else {
        result.error("Invalid credentials");
      }
      result.complete();
    }, 2500);
    return result.asObservable();
  }

  logout(): void {
    this._isLoggedIn$.next(false); // tiene que cambiar el estado
  }
}
