import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        result.next(true);
      } else {
        result.error("Invalid credentials");
      }
      result.complete();
    }, 2500);
    return result.asObservable();
  }
}
