import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.jwtToken;

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloned);
  }
  /*console.log("Sent:", req);
  next(req).subscribe({
    next: (event) => {
      console.log("Response received:", event);
    },
    error: (error) => {
      console.error("Error occurred:", error);
    },
  });*/
  return next(req);
};
