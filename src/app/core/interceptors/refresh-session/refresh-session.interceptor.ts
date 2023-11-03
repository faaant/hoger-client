import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';

@Injectable()
export class RefreshSessionInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !error.url?.includes('auth/refresh')) {
          return this.authService.refresh().pipe(
            switchMap(() => {
              return next.handle(request.clone());
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
