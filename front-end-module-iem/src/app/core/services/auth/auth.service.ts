import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn$: BehaviorSubject<boolean>;
  private _jwtToken: string | null = null;

  constructor() {
    const jwtToken = localStorage.getItem("jwtToken");
    this._isLoggedIn$ = new BehaviorSubject<boolean>(jwtToken ? true : false);
    this._jwtToken = jwtToken ? jwtToken : null;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn$.getValue();
  }

  get jwtToken(): string | null {
    return this._jwtToken;
  }

  login(username: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        this._jwtToken = "fake-jwt-token";

        localStorage.setItem("jwtToken", this._jwtToken);

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
    localStorage.removeItem("jwtToken");
  }
}
