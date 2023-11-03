import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthTokens, User } from '@core/models/auth';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BaseService } from '@core/services/base-service/base.service';
import { Observable, tap } from 'rxjs';
import { ID_KEY, JWT_KEY, JWT_REFRESH_KEY } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(private httpClient: HttpClient, private router: Router) {
    super();
  }

  signIn(user: Partial<User>) {
    this.httpClient
      .post<AuthTokens>(this.apiUrls.signIn, user)
      .subscribe(({ accessToken, refreshToken, idToken }) => {
        localStorage.setItem(JWT_KEY, accessToken);
        localStorage.setItem(JWT_REFRESH_KEY, refreshToken);
        localStorage.setItem(ID_KEY, idToken);

        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    localStorage.removeItem(JWT_KEY);
    localStorage.removeItem(JWT_REFRESH_KEY);
    localStorage.removeItem(ID_KEY);

    this.router.navigate(['/auth/sign-in']);
  }

  refresh(): Observable<unknown> {
    return this.httpClient.post<AuthTokens>(this.apiUrls.refresh, null).pipe(
      tap(({ accessToken }) => {
        localStorage.setItem(JWT_KEY, accessToken);
      })
    );
  }

  getUserInfo(): User | undefined {
    const idToken = localStorage.getItem(ID_KEY);

    if (!idToken) {
      return;
    }

    try {
      return jwt_decode(idToken);
    } catch {
      return;
    }
  }
}
