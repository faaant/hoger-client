import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWT_KEY, JWT_REFRESH_KEY } from '@core/constants';

@Injectable()
export class JwtSessionInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(JWT_KEY);

    if (new URL(req.url).pathname.includes('/auth/refresh')) {
      token = localStorage.getItem(JWT_REFRESH_KEY);
    }

    const clonedRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(clonedRequest);
  }
}
